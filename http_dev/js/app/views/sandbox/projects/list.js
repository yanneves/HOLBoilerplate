// Filename: views/projects/list
define([
  'jquery',		// jQuery Library
  'underscore',	// UnderscoreJS Library
  'backbone',	// BackboneJS MVC
  // Pull in the Collection module from above
  'app/collections/sandbox/projects',
  'text!templates/sandbox/projects/list.html'

], function($, _, Backbone, projectsCollection, projectListTemplate){
  var projectListView = Backbone.View.extend({
    el: "#content",
    initialize: function(){
      this.collection = projectsCollection;
      this.collection.bind("add", this.exampleBind);
    },
    exampleBind: function( model ){
      log(model.attributes.name + " bound! w/ score of: " + model.attributes.score);
    },
    render: function(){
	  var data = {
        projects: this.collection.models,
        _: _
      };
      var compiledTemplate = _.template( projectListTemplate, data );
      $(this.el).html( compiledTemplate );
    }
  });
  return new projectListView;
});
