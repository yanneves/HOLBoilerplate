/*
 * <DOM>
 * Author: 
 */
 
define([
// These are path alias that we configured in our bootstrap
	'mobileboilerplate'		// Mobile Boilerplate JavaScript helper functions
], function(MBP){
	// Above we have passed in Mobile Boilerplate (MBP)
	
	var mbp = {
		scaleBugFix: function(){
			MBP.scaleFix();
			MBP.hideUrlBar();
		},
		init: function(){
			
			// iPhone Scale Bug Fix,
			// read this when using
			// http://bit.ly/fRy6L9
			this.scaleBugFix();

		}
	}
	
	// log once ready
	log("Mobile Boilerplate helpers ready!", 'dev');

	return mbp;
});
