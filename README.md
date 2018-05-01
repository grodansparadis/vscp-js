# VSCP core javascript libraries

The core javascript libraries providing an abstract interface to access
* the VSCP event communication bus (independent on physical layer),
* and variables, stored in the VSCP daemon database.

<img src="http://vscp.org/images/logo.png" width="200px" alt="VSCP logo">

The communication to the VSCP daemon takes place via websocket and REST.

## How to use them?

In general its recommended to use a released version. If you know what to do, use the trunk, but don't complain later on. ;-)

If you like, you can bind this repository as git submodule to your own one.
* Add it e.g. to the existing folder ```js``` via ```git submodule add https://github.com/grodansparadis/vscp-js.git js/vscp-js```, which will create the subfolder ```vscp-js``` and clones the repository there.
* The previous step will create an additional file, called ```.gitmodules```, which contains the submodule informations.
* Commit the changes now to your repository.

Note, the submodule is not automatically updated with a ```git pull```, you have to explicit call ```git pull --recursive``` or ```git submodule update --recursive --remote```.

### Websocket interface

Include the following javascript files to your HTML:
``` javascript
<!-- VSCP websocket authentication encryption/decryption -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/aes-js/3.1.0/index.min.js"></script>
<!-- VSCP common core library -->
<script type="text/javascript" src="js/vscp-js/vscp.js"></script>
<!-- VSCP websocket client library -->
<script type="text/javascript" src="js/vscp-js/vscpws.js"></script>
```

The websocket API supports callbacks and Promise to handle the asynchronous communication.
Only the first two of the following examples will shows both possibilities. All others continoue using promises.

#### Open connection

Example using callbacks:

``` javascript
var vscpClient = new vscp.ws.Client();

vscpClient.connect({
    url: "ws://localhost:8884/ws1",
    userName: "admin",
    password: "secret",
    vscpkey: "A4A86F7D7E119BA3F0CD06881E371B989B33B6D606A863B633EF529D64544F8E",
    authdomain: "mydomain.com",
    onSuccess: function() {
        // Implement your code here ...
    },
    onError: function() {
        // Implement your code here ...
    }
});
```

Example using native promises:

``` javascript
var vscpClient = new vscp.ws.Client();

vscpClient.connect({
    url: "ws://localhost:8884/ws1",
    userName: "admin",
    password: "secret",
    vscpkey: "A4A86F7D7E119BA3F0CD06881E371B989B33B6D606A863B633EF529D64544F8E",
    authdomain: "mydomain.com"
})
.then(function() {
    // Implement your code here ...
})
.catch(function() {
    // Implement your code here ...
});
```

#### Close connection

Example using callbacks:

``` javascript
vscpClient.disconnect({
    onSuccess: function(client) {
        // Implement your code here ...
    }
});
```

Example using native promises:

``` javascript
vscpClient.disconnect()
.then(function() {
    // Implement your code here ...
})
.catch(function() {
    // Implement your code here ...
});
```

#### Send events

``` javascript
vscpClient.sendEvent({
    event: new vscp.Event({
        vscpClass:      vscp.constants.classes.VSCP_CLASS1_CONTROL,
        vscpType:       vscp.constants.types.VSCP_TYPE_CONTROL_TURNON,
        vscpPriority:   vscp.constants.priorities.PRIORITY_3_NORMAL,
        vscpData:       [ 0, 1, 12 ]
    })
})
.then(function() {
    console.info("TURNON event sent.");

    // Implement your code here ...
})
.catch(function() {
    console.error("Failed to send TURNON event.");

    // Implement your code here ...
});
```

#### Receive events

First add a event listener to the client.

``` javascript

// Catch all events and show them in the trace tab.
var eventListener = function(client, evt) {
    // Implement your code here ...
};

// Add event listener
vscpClient.addEventListener(eventListener);
```

In the second step, start listening.

``` javascript
// Start receiving VSCP events
vscpClient.start()
.then(function() {
    console.info("Receiving VSCP events started.");

    // Implement your code here ...
})
.catch(function() {
    console.error("Failed to start receiving VSCP events.");

    // Implement your code here ...
});
```

### REST interface

Include the following javascript files to your HTML:
``` javascript
<!-- jQuery used for ajax calls -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<!-- VSCP common core library -->
<script type="text/javascript" src="js/vscp-js/vscp.js"></script>
<!-- VSCP REST client library -->
<script type="text/javascript" src="js/vscp-js/vscprest.js"></script>
```

The websocket API supports callbacks and Promise to handle the asynchronous communication.
Only the first two of the following examples will shows both possibilities. All others continoue using promises.

#### Open connection

Example using callbacks:

``` javascript
var vscpClient = new vscp.rest.Client({
    baseUrl: "http://localhost:8884"
});

vscpClient.openSession({
    user: "admin",
    password: "secret",
    onSuccess: function() {
        // Implement your code here ...
    },
    onError: function() {
        // Implement your code here ...
    }
});
```

Example using native promises:

``` javascript
var vscpClient = new vscp.rest.Client({
    baseUrl: "http://localhost:8884"
});

vscpClient.openSession({
    user: "admin",
    password: "secret"
})
.then(function(){
    // Implement your code here ...
})
.catch(function(){
    // Implement your code here ...
});

```

#### Close connection

Example using callbacks:

``` javascript
vscpClient.closeSession({
    onSuccess: function() {
        // Implement your code here ...
    },
    onError: function() {
        // Implement your code here ...
    }
});
```

Example using native promises:

``` javascript
vscpClient.closeSession()
.then(function(){
    // Implement your code here ...
})
.catch(function() {
    // Implement your code here ...
});
```

#### Send events

``` javascript
vscpRestClient.sendEvent({
    event: new vscp.Event({
        vscpClass:      vscp.constants.classes.VSCP_CLASS1_INFORMATION,
        vscpType:       vscp.constants.types.VSCP_TYPE_INFORMATION_NODE_HEARTBEAT,
        vscpPriority:   vscp.constants.priorities.PRIORITY_3_NORMAL,
        vscpData:       [ 138, 0, 255 ]
    })
})
.then(function(data) {
    // Implement your code here ...
})
.catch(function(data) {
    // Implement your code here ...
});
```

#### Receive events

Reading a single event:

``` javascript
vscpClient.readEvent()
.then(function(data) {

    // Event received?
    if (0 < data.response.count) {
        var evt = data.response.event[0];

        // Implement your code here ...
    }
})
.catch(function(data) {
    // Implement your code here ...
})
```

Reading 10 events:

``` javascript
vscpClient.readEvent({
    count: 10
})
.then(function(data) {

    var index = 0;
    var evt = null;

    // Event received?
    if (0 < data.response.count) {

        for(index = 0; index < data.response.count; ++index) {
            evt = data.response.event[index];

            // Implement your code here ...
        }
    }
})
.catch(function(data) {
    // Implement your code here ...
})
```

<hr>
Copyright &copy; 2015-2018 Andreas Merkle <vscp@blue-andi.de><br />
Copyright &copy; 2012-2018 <a href="http://www.grodansparadis.com">Grodans Paradis AB (Paradise of the Frog)</a>
