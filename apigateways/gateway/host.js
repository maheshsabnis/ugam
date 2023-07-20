const path = require('path');
const gateway = require( 'express-gateway');

// run the gateway by loading the gatyeway configuration in it

gateway()
.load(path.join(__dirname, 'config')).run();