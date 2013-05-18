require.config({
	paths: {
		jquery: 'path-to-jquery',
		underscore: 'path-to-underscore',
		backbone: 'path-to-backbone'
	}
});

require(['app'], function(App) {
	App.initialize();
});