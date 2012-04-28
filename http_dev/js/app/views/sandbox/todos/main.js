/*
 * <Views - Todos - Main>
 * Author: 
 */
 
define([
	'jquery',		// jQuery Library
	'underscore',	// UnderscoreJS Library
	'backbone',		// BackboneJS MVC
	'app/views/sandbox/todos/app',
	'text!templates/sandbox/todos/main.html'
], function($, _, Backbone, todosApp, mainTemplate){
	
	var view = Backbone.View.extend({
		el: "#content",
		render: function(){
			$(this.el).html(mainTemplate);
			// create instance of todomvc application
			var todomvc = new todosApp;
		}
	});
	return new view;
});