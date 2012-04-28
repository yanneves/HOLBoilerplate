/*
 * <Models - Todo>
 * Author: 
 */

define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  var model = Backbone.Model.extend({
    defaults: {
      content: "Empty...",
	  done: false
    },
	
	toggle: function(){
		this.save({done: !this.get('done')});
	},
	clear: function(){
		this.destroy();
	},
	
    initialize: function(){
		if(!this.get('content')){
			this.set({content: this.defaults.content});
		}
    }
  });
  return model;
});
