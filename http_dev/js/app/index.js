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
		Router.init();
	}
	
	// log parameters for development
	if(typeof ENV != 'undefined' && ENV.development === true){
		// log once everything is ready
		log("dev: Everything else is ready!");
	}

	return {
		init: init
	};
});
