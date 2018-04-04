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

TODO

### REST interface

TODO

## 

<hr>
Copyright © 2015,2018 Andreas Merkle <vscp@blue-andi.de><br />
Copyright &copy; 2012-2018 <a href="http://www.grodansparadis.com">Grodans Paradis AB (Paradise of the Frog)</a>
