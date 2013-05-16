/* global define*/
define(['hbs!onering/templates/home'], function(template) {
	return {
		baseViewName: 'home', 
		baseViewTemplate: template,
		initialize: function() {
			console.log("Default view called");
		}
	};
});