/*
 * <Views - Tutorial - Welcome>
 * Author: 
 */
 
define([
	'jquery',		// jQuery Library
	'underscore',	// UnderscoreJS Library
	'backbone',		// BackboneJS MVC
	'app/views/sandbox/todos/main',
	'app/views/sandbox/grids',
	'app/views/sandbox/elements',
	'app/views/sandbox/zocials',
	'app/views/sandbox/docs',
	'app/views/sandbox/projects/list',
	'text!templates/sandbox/main.html'
], function($, _, Backbone, todosView, gridsView, elementsView, zocialsView, docsView, projectsListView, mainTemplate){
	
	var view = Backbone.View.extend({
		el: "#content",
		render: function(name){
			switch(name){
				case "todos": { todosView.render(); break;}
				case "grids": { gridsView.render(); break;}
				case "elements": { elementsView.render(); break;}
				case "zocials": { zocialsView.render(); break;}
				case "documentation": { docsView.render(); break;}
				case "projects": { projectsListView.render(); break;}
				default: { $(this.el).html(mainTemplate);}
			}
		}
	});
	return new view;
});