/*
 * <Primary Scripts>
 * Author: Aaunel
 */
 
/* Table of Contents
-----------------------------------------------

1	Table of Contents
2	References
3	Parallel-Loaded Scripts
4	Functions
		SAS
5	Google Analytics
6	Initiation

*/

/* References
-----------------------------------------------
SAS -> stand-alone script
VIDEO -> videojs
GA	-> Google Analytics

*/

/* Parallel-Loaded Scripts
----------------------------------------------- */
head.js(
	{jquery:'http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js'},
	{videojs:'/js/libs/video.min.js'}//,
	//{analytics:'http://www.google-analytics.com/ga.js'}
);

/* Functions
----------------------------------------------- */
SAS = {
	init:function(){
		// stand-alone script
	}
};

VIDEO = {
	init: function() {
		if($('#video').length){
			VIDEO.run();
		}
	},
	run: function() {
		VideoJS.setupAllWhenReady();
	}
};

/* Google Analytics
----------------------------------------------- 
GA = {
	init:function(){
		var _gaq = [['_setAccount', 'UA-xxxxxxxx-x'], ['_trackPageview']];
	}
}; */

/* Initiation
----------------------------------------------- */
head.ready('jquery',SAS.init);
head.ready('videojs',VIDEO.init);
//head.ready('analytics',GA.init);