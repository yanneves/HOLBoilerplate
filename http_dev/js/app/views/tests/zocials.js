/*
 * <View - Test - Grids>
 * Author: 
 */
 
define([
	'jquery',		// jQuery Library
	'underscore',	// UnderscoreJS Library
	'backbone',		// BackboneJS MVC
	'text!templates/tests/zocials.html'
], function($, _, Backbone, zocials){
	// define view
	var view = Backbone.View.extend({
		// set container
		el: $('#pageBody'),
		// define render function
		render:function(){
			// inject html into container
			$(this.el).html(zocials);
		}
	});
	
	// return constructed view
	return new view;
});