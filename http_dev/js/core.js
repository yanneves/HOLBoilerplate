/*
 * <Primary Scripts>
 * Author: 
 */
 
/* Table of Contents
-----------------------------------------------

1	Table of Contents
2	References
3	Parallel-Loaded Scripts
4	Functions
		SAS
6	Initiation

*/

/* References
-----------------------------------------------
SAS -> stand-alone script

*/

/* Parallel-Loaded Scripts
----------------------------------------------- */
head.js(
	// libraries
	{jquery:'//ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js'},
	{underscore:'//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.3.1/underscore-min.js'},
	{backbone:'//cdnjs.cloudflare.com/ajax/libs/backbone.js/0.9.0/backbone-min.js'},
	{backbone_localStorage:'//cdnjs.cloudflare.com/ajax/libs/backbone-localstorage.js/1.0/backbone.localStorage-min.js'},
	// application
	{namespace:'/app/'}//,
	//{backbone:'//cdnjs.cloudflare.com/ajax/libs/backbone.js/0.9.0/backbone-min.js'},
	//{backbone:'//cdnjs.cloudflare.com/ajax/libs/backbone.js/0.9.0/backbone-min.js'}
);

if(head.browser.ie == true && parseInt(head.browser.version) < 7){
	head.js('//cdnjs.cloudflare.com/ajax/libs/dd_belatedpng/0.0.8/dd_belatedpng.min.js',
		function(){
			DD_belatedPNG.fix('img, .png_bg');
		}
	);
}

/* Functions
----------------------------------------------- */
SAS = {
	init:function(){
		// stand-alone script
	}
};

INDEX = {
	init:function(){
		// stand-alone script
	}
};

/* Initiation
----------------------------------------------- */
head.ready(SAS.init);
head.ready(INDEX.init);
