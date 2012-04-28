define([
  'underscore',
  'backbone',
  'backbone_localStorage',	// BackboneJS LocalStorage plugin
  'app/models/sandbox/projects'
], function(_, Backbone, Store, projectsModel){
  var projectsCollection = Backbone.Collection.extend({
    model: projectsModel,
	jsonFeed: [
		{name: "Twitter"},
		{name: "Facebook"},
		{name: "MySpace", score: 20}
	],
	
    initialize: function(){
		this.add(this.jsonFeed);
    }

  });

  return new projectsCollection;
});
