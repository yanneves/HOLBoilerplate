/*
 * <Router>
 * Author: 
 */
 
define([
	'jquery',		// jQuery Library
	'underscore',	// UnderscoreJS Library
	'backbone',		// BackboneJS MVC
	// Views
	'app/views/home/main',
	'app/views/tests/grids',
	'app/views/tests/elements',
	'app/views/tests/zocials'
], function($, _, Backbone, mainView, gridsView, elementsView, zocialsView){
	var AppRouter = Backbone.Router.extend({
		routes: {
			// Define some URL routes
			
			// Default
			'*actions': 'defaultAction'
		},
		defaultAction: function(actions){
			// We have no matching route, lets display the home page
			var reroute = mainView;
			
			// log parameters for development
			if(typeof ENV != 'undefined' && ENV.development === true){
				// log route
				log("dev: Rerouting to: " + actions);
			}
			
			// add routes for testing
			if(typeof ENV != 'undefined' && ENV.testing === true){
				switch(actions){
					// render oocss responsive grids
					case "!/test/grids" : {
						reroute = gridsView;
						break;
					}
					// render elements index
					case "!/test/elements" : {
						reroute = elementsView;
						break;
					}
					// render zocials buttons
					case "!/test/zocials" : {
						reroute = zocialsView;
						break;
					}
				}
			}
			
			// render reroute
			reroute.render();
		}
	});
	
	var init = function(){
		var app_router = new AppRouter;
		Backbone.history.start();
	};
	return {
		init: init
	};
});
