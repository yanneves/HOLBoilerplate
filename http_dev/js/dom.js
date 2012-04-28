/*
 * <DOM>
 * Author: 
 */
 
define([
// These are path alias that we configured in our bootstrap
	'jquery'		// jQuery Library
], function($){
	// Above we have passed in jQuery ($)
	
	var dom = {
		// == Example ==
		/*
		showHideWidgets: function(){
			// do everything here
		},
		*/
		init: function(){

			// == Example ==
			// show or hide widgets
			//this.showHideWidgets();

		}
	}
	
	// log once ready
	log("DOM manipulations ready!", 'dev');

	return dom;
});
