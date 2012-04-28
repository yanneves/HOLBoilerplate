/*
 * <Collections - Todos>
 * Author: 
 */
 
define([
  'underscore',
  'backbone',
  'backbone_localStorage',	// BackboneJS LocalStorage plugin
  'app/models/sandbox/todo'
], function(_, Backbone, Store, Todo){
  var collection = Backbone.Collection.extend({
    model: Todo,
	localStorage: new Store("todos-backbone-require"),
	
	nextOrder: function(){
		if(!this.length) return 1;
		return this.last().get('order') + 1;
	},
	comparator: function(todo){
		return todo.get('order');
	},
	done: function(){
		return this.filter(function(todo){ return todo.get('done'); });
	},
	remaining: function(){
		return this.without.apply(this, this.done());
	}
  });

  return new collection;
});
