var requireJS = require('requirejs'), 
    express = require('express');
var app = express();
app.configure(function() {
    app.use(express.router);
});
requireJS.config({
    nodeRequire: require
});
var router = requireJS('path-to-routes');
app.get('*', routeMatcher, pageRenderer);
//Handle the different regexps in Router, pass values to the appropriate controller. Middleware to be written. Store data to res.local
//In pageRenderer, figure out how to attach events with functions. This is sli low priority. To begin with, simple url matches are enough