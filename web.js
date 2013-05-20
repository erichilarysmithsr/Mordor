var requireJS = require('requirejs'), 
    express = require('express');
var app = express();
requireJS.config({
    nodeRequire: require
});
app.use(express.static('onering/todomvc'));
var router = requireJS('./onering/router');
app.get('/', function(req, res, next) {
	res.sendfile('index.html');
});
//app.get('*', router);
var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});