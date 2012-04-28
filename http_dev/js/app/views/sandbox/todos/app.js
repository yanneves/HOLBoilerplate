/*
 * <Views - Todos - App>
 * Author: 
 */
 
define([
	'jquery',		// jQuery Library
	'underscore',	// UnderscoreJS Library
	'backbone',		// BackboneJS MVC
	'app/collections/sandbox/todos',
	'app/views/sandbox/todos/todos',
	'text!templates/sandbox/todos/stats.html'
], function($, _, Backbone, Todos, todoView, statsTemplate){
	
	var view = Backbone.View.extend({
		el: "#todoapp",
		events: {
			"keypress #new-todo": "createOnEnter",
			"keyup #new-todo": "showTooltip",
			"click .todo-clear a": "clearCompleted",
			"click .mark-all-done": "toggleAllComplete"
		},
		statsTemplate: _.template(statsTemplate),
		
		addOne: function(todo){
			var view = new todoView({model: todo});
			this.$('#todo-list').append(view.render().el);
		},
		addAll: function(){
			Todos.each(this.addOne);
		},
		newAttributes: function(){
			return {
				content: this.input.val(),
				order: Todos.nextOrder(),
				done: false
			};
		},
		createOnEnter: function(e){
			if(e.keyCode != 13) return;
			Todos.create(this.newAttributes());
			this.input.val('');
		},
		clearCompleted: function(){
			_.each(Todos.done(), function(todo){ todo.clear(); });
			return false;
		},
		showTooltip: function(e){
			var tooltip = this.$('.ui-tooltip-top');
				val = this.input.val();
			
			tooltip.fadeOut();
			if(this.tooltipTimeout) clearTimeout(this.tooltipTimeout);
			if(val == '' || val == this.input.attr('placeholder')) return;
			var show = function(){ tooltip.show().fadeIn(); };
			this.tooltipTimeout = _.delay(show, 1000);
		},
		toggleAllComplete: function(){
			var done = this.allCheckbox.checked;
			Todos.each(function(todo){ todo.save({"done": done}); });
		},
		
		render: function(){
			var done = Todos.done().length;
				remaining = Todos.remaining().length;
			
			$('#todo-stats').html(this.statsTemplate({
				total: Todos.length,
				done: done,
				remaining: remaining
			}));
			
			this.allCheckbox.checked = !remaining;
		},
		initialize: function(){
			_.bindAll(this, 'addOne', 'addAll', 'render', 'toggleAllComplete');
			
			this.input = this.$('#new-todo');
			this.allCheckbox = this.$('.mark-all-done')[0];
			
			Todos.bind('add', this.addOne);
			Todos.bind('reset', this.addAll);
			Todos.bind('all', this.render);
			
			Todos.fetch();
		}
	});
	return view;
});