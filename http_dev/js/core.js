/*
 * <Primary Scripts>
 * Author: 
 */
 
/* Table of Contents
-----------------------------------------------

1	Table of Contents
2	References
3	Set Scope
4	Parallel-Loaded Scripts
5	Functions
		SAS
		INDEX
6	Initiation

*/

/* References
-----------------------------------------------
SAS -> stand-alone script
INDEX -> application index script

*/

/* Set Scope
----------------------------------------------- */
// head.load.js - script loader
var load = head;
// modernizr.js - feature detection and polyfiller
var feature = Modernizr;

/* Parallel-Loaded Scripts
----------------------------------------------- */
load.js(
	// libraries
	{jquery:'//ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js'},
	{underscore:'//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.3.1/underscore-min.js'},
	{backbone:'//cdnjs.cloudflare.com/ajax/libs/backbone.js/0.9.0/backbone-min.js'},
	{backbone_localStorage:'//cdnjs.cloudflare.com/ajax/libs/backbone-localstorage.js/1.0/backbone.localStorage-min.js'}//,
	// application
	//{namespace:'/app/namespace.js'}
);

/*if(feature.opacity == false){
	load.js('//cdnjs.cloudflare.com/ajax/libs/dd_belatedpng/0.0.8/dd_belatedpng.min.js',
		function(){
			DD_belatedPNG.fix('img, .png_bg');
		}
	);
}*/

/* Functions
----------------------------------------------- */
SAS = {
	init:function(){
		// stand-alone script
		log("jQuery is ready!");
	}
};

INDEX = {
	init:function(){
		// stand-alone script
		log("Everything else is ready!");
	}
};

/* Initiation
----------------------------------------------- */
load.ready('jquery', SAS.init);
load.ready(INDEX.init);