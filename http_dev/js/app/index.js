/*
 * <Index>
 * Author: 
 */
 
define([
// These are path alias that we configured in our bootstrap
	'jquery',		// jQuery Library
	'underscore',	// UnderscoreJS Library
	'backbone',		// BackboneJS MVC
	'router'		// Application Router
], function($, _, Backbone, Router){
	// Above we have passed in jQuery, Underscore and Backbone
	// They will not be accessible in the global scope
	
	var init = function(){
		// Pass in our Router module and call its initialize function
		Router.initialize();
	}
	
	// log once everything is ready
	log("Everything else is ready!", 'dev');

	return {
		initialize: init
	};
});
