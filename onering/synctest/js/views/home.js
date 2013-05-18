define([
	'jquery',
	'underscore',
	'backbone',
	'models/home'
	'hbs!templates/home'
], function($, _, Backbone, Model, Template) {
	var homeView = Backbone.view.extend({
		el: '#container',
		initialize: function() {
			this.Model = new Model();
		}
	});
});