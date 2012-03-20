/*
 * <Core>
 * Author: 
 */

/* =Table of Contents=
-----------------------------------------------

01|	=Table of Contents=
02|	=References=
03|	=Namespace=
  |		=Modernizr=
  |		=RespondJS=
  |		=RequireJS=
  |		=(dot)Log=
04|	=Environment=
05|	=AMD=
06|	=Classes=
  |		=SAS=
  |		=APP=
07|	=Initiation=

*/

/* =References=
-----------------------------------------------

	No references.

*/

/* =Namespace=
----------------------------------------------- */

	// =Modernizr=
	// feature detection and polyfiller
	var feature = Modernizr;
	
	// =RespondJS=
	// polyfiller for responsive design
	var respond = respond;
	
	// =RequireJS=
	// AMD script loader
	var AMD = require;
	
	// =(dot)Log=
	// lightweight wrapper for 'console.log'
	// usage: log('inside coolFunc', this, arguments);
	var log = log;


	
/* =Environment=
----------------------------------------------- */

	var ENV = {
		// development environment?
		development:false,
		// testing environment?
		testing:true,
		// production environment?
		production:false
	};



/* =AMD=
----------------------------------------------- */

	AMD.config({
		paths: {
			// require plug-ins
			text:'app/libs/require/text',
			order:'app/libs/require/order',
			
			// polyfillers
			belatedpng:'//cdnjs.cloudflare.com/ajax/libs/dd_belatedpng/0.0.8/dd_belatedpng.min',
			
			// libraries
			jquery:'//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min',
			underscore:'app/libs/underscore/min-amd', // Underscore AMD optimised version
			backbone:'app/libs/backbone/min-amd', // Backbone AMD optimised version
			backbone_localStorage:'app/libs/backbone/localstorage', // Backbone Local Storage plugin
			
			// application
			boilerplate:'app/libs/boilerplate',
			index:'app/index',
			router:'app/router',
			templates:'../templates'
		}
	});



/* =Classes=
----------------------------------------------- */

	// =SAS=
	// stand-alone script
	SAS = {
		init:function(){
			// set scope
			var base = SAS;
			
			// environment-related actions
			if(typeof ENV !== 'undefined'){
				// log parameters for development
				if(ENV.development === true){
					// log notice of environment
					log("dev: Development Environment active");
					
					// log once jQuery is ready
					log("dev: jQuery is ready!");
				}
				
				// log parameters for testing
				if(ENV.testing === true){
					// log notice of environment
					log("test: Testing Environment active");
					
					// identify media query support
					log("test: Are media queries supported? " + ((respond.mediaQueriesSupported) ? "Yes" : "No"));
				}
			}
			
			// check for opacity, otherwise load 'belatedpng'
			if(feature.opacity === false){
				AMD(['belatedpng'], function(){
					DD_belatedPNG.fix('img, .png_bg');
				});
			}
		}
	};

	// =APP=
	// application executables
	APP = {
		models:{
			identify:function(){
				// identify Person model
				this.Person = Backbone.Model.extend({
					defaults:{
						firstName: "",
						lastName: "",
						age: 0,
						dev: "None"
					},
					validate:function(attr){
						var result = "";
						if(attr.age < 0 || attr.age > 110){
							result += "Invalid age entered (" + attr.age + ") -- must be between 0 and 110. \n\n";
						}
						
						return result;
					},
					initialize: function(){
						if(typeof ENV !== 'undefined' && ENV.development === true){
							// log once model identified
							log("dev: Person model identified!");
						}
						this.bind('error', function(model, error){
							alert(error);
						});
					}
				});
				
				// identify Group collection
				this.Group = Backbone.Collection.extend({
					model: this.Person
				});
			},
			define:function(){
				// define person
				this.person1 = new this.Person({
					firstName: "Yann",
					lastName: "Eves-Hollis",
					age: 20,
					dev: "JavaScript"
				});
				this.person2 = new this.Person({
					firstName: "Lance",
					lastName: "Kesson",
					dev: "PHP"
				});
				this.person3 = new this.Person({
					firstName: "Ludovic",
					dev: "PHP"
				});
				this.person4 = new this.Person({
					firstName: "Rajeev",
					dev: "Tester"
				});
				this.person5 = new this.Person({
					firstName: "Ross",
					lastName: "Hunter",
					dev: "Lead"
				});
				
				this.marAcq = new this.Group([this.person1, this.person2, this.person3, this.person4, this.person5]);
				
				for(var i=0; i<this.marAcq.models.length; i++){
					var attr = this.marAcq.models[i].attributes;
						name = attr.firstName + " " + attr.lastName;
					log("Marcom Acquisition: " + name);
				}
			},
			init:function(){
				// identify models
				this.identify();
				
				// define models
				this.define();
			}
		},
		init:function(app){
			// set scope
			var base = APP;
			
			// log parameters for development
			if(typeof ENV != 'undefined' && ENV.development === true){
				// log once everything is ready
				log("dev: Firing application!");
			}
			
			// initiate application
			app.init();
		}
	};



/* =Initiation=
----------------------------------------------- */

	AMD(['jquery'], SAS.init);

	AMD(['index'], function(index){
		APP.init(index);
	});



