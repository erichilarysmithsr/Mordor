define([
	'jquery', 
	'underscore',
	'backbone',
	'views/home'
], function($, _, Backbone, HomeView) {
	var AppRouter = Backbone.Router.extend({
		routes: {
			'/home': 'homeRoute', 
			'*actions': 'defaultRoute'
		}
	});
	var initialize = function() {
		var appRouter = new AppRouter;
		appRouter.on('homeRoute', function() {
			vare homeView = new HomeView;
			homeView.render();
		});
		Backbone.history.start();
	};
	return {
		initialize: initialize
	};
});