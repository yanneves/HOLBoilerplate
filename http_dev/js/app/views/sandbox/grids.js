/*
 * <View - Test - Grids>
 * Author: 
 */
 
define([
	'jquery',		// jQuery Library
	'underscore',	// UnderscoreJS Library
	'backbone',		// BackboneJS MVC
	'text!templates/sandbox/grids.html'
], function($, _, Backbone, grids){
	// define view
	var view = Backbone.View.extend({
		// set container
		el: '#content',
		// define render function
		render:function(){
			// inject html into container
			$(this.el).html(grids);
		}
	});
	
	// return constructed view
	return new view;
});