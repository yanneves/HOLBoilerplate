/*
 * <Views - Todos - Todos>
 * Author: 
 */
 
define([
	'jquery',		// jQuery Library
	'underscore',	// UnderscoreJS Library
	'backbone',		// BackboneJS MVC
	'text!templates/sandbox/todos/todos.html'
], function($, _, Backbone, todosTemplate){
	
	var view = Backbone.View.extend({
		tagName: "li",
		template: _.template(todosTemplate),
		events:{
			"click .check": "toggleDone",
			"dblclick div.todo-content": "edit",
			"click span.todo-destroy": "clear",
			"keypress .todo-input": "updateOnEnter",
			"blur .todo-input": "close"
		},
		
		toggleDone: function(){
			this.model.toggle();
		},
		edit: function(){
			$(this.el).addClass("editing");
			this.input.focus();
		},
		close: function(){
			this.model.save({content: this.input.val()});
			$(this.el).removeClass("editing");
		},
		updateOnEnter: function(e){
			if(e.keyCode == 13) this.close();
		},
		clear: function(){
			this.model.clear();
		},
		
		render: function(){
			$(this.el).html(this.template(this.model.toJSON()));
			this.input = this.$('.todo-input');
			return this;
		},
		initialize: function(){
			_.bindAll(this, 'render', 'close', 'remove');
			this.model.bind('change', this.render);
			this.model.bind('destroy', this.remove);
		}
	});
	return view;
});