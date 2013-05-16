/* global define */
define([
		'./routes', 
		'./handlebars'
	], function(Routes, Handlebars) {
	var routerMiddleware = function(req, res, next) {
		//Match Routes, Controller action?
		//Get base view for the corresponding match, start getting models recursively

		for (var i = 0; i < Routes.length; i++) {
			console.log(Routes[i].baseViewTemplate({}));
		}
	};
	return routerMiddleware;
});