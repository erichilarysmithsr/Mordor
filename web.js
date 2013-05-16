var requireJS = require('requirejs'), 
    express = require('express');
var app = express();
requireJS.config({
    nodeRequire: require
});
var router = requireJS('./onering/router');
app.get('*', router);
var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});