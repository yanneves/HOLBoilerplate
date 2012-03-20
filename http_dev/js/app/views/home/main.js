/*
 * <Views - Home - Main>
 * Author: 
 */
 
define([
	'jquery',		// jQuery Library
	'underscore',	// UnderscoreJS Library
	'backbone',		// BackboneJS MVC
	'text!templates/home/main.html'
], function($, _, Backbone, mainTemplate){
	
	var view = Backbone.View.extend({
		el: $("#pageBody"),
		render: function(){
			$(this.el).html(mainTemplate);
		}
	});
	return new view;
});