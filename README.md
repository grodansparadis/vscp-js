# VSCP core javascript libraries

The core javascript libraries providing an abstract interface to access
* the VSCP event communication bus (independent on physical layer),
* and variables, stored in the VSCP daemon database.

<img src="http://vscp.org/images/logo.png" width="200px" alt="VSCP logo">

The communication to the VSCP daemon takes place via websocket and REST.

## How to use them?

First bind this repository as git submodule to your own one.
* Add it e.g. to the existing folder ```js``` via ```git submodule add https://github.com/grodansparadis/vscp-js.git js/vscp-js```, which will create the subfolder ```vscp-js``` and clones the repository there.
* The previous step will create an additional file, called ```.gitmodules```, which contains the submodule informations.
* Commit the changes now to your repository.

### Websocket interface

Include the following javascript files to your HTML:
``` javascript
<!-- VSCP websocket authentication encryption/decryption -->
<script type="text/javascript" src="js/vscp-js/3rd-party/aes-js/3.1.0/index.js"></script>
<!-- VSCP common core library -->
<script type="text/javascript" src="js/vscp-js/vscp.js"></script>
<!-- VSCP websocket client library -->
<script type="text/javascript" src="js/vscp-js/vscpws.js"></script>
```

#### Open connection

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

Note, the websocket API doesn't support jquery promises yet, as the REST client API.

#### Close connection

``` javascript
vscpClient.disconnect();
```

#### Send events

TODO

#### Receive events

TODO

### REST interface

Include the following javascript files to your HTML:
``` javascript
<!-- jQuery used for ajax calls and promises -->
<script type="text/javascript" src="js/3rd-party/jquery/3.2.1/jquery-3.2.1.min.js"></script>
<!-- VSCP common core library -->
<script type="text/javascript" src="js/vscp-js/vscp.js"></script>
<!-- VSCP REST client library -->
<script type="text/javascript" src="js/vscp-js/vscprest.js"></script>
```

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
})
```

Example using jquery promises:

``` javascript
var vscpClient = new vscp.rest.Client({
    baseUrl: "http://localhost:8884"
});

vscpClient.openSession({
    user: "admin",
    password: "secret"
})
.done(function(){
    // Implement your code here ...
})
.fail(function(){
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

Example using jquery promises:

``` javascript
vscpClient.closeSession()
.done(function(){
    // Implement your code here ...
})
.fail(function() {
    // Implement your code here ...
})
```

#### Send events

TODO

#### Receive events

TODO

<hr>
Copyright © 2015,2018 Andreas Merkle <vscp@blue-andi.de><br />
Copyright &copy; 2012-2018 <a href="http://www.grodansparadis.com">Grodans Paradis AB (Paradise of the Frog)</a>
