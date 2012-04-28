/*
 * <View - Test - Elements>
 * Author: 
 */
 
define([
	'jquery',		// jQuery Library
	'underscore',	// UnderscoreJS Library
	'backbone',		// BackboneJS MVC
	'text!templates/sandbox/elements.html'
], function($, _, Backbone, elements){
	// define view
	var view = Backbone.View.extend({
		// set container
		el: '#content',
		// define render function
		render:function(){
			// inject html into container
			$(this.el).html(elements);
		}
	});
	
	// return constructed view
	return new view;
});