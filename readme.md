# HOLBoilerplate
__H5BP-OOCSS-LESS-BBBP Boilerplate__


## File Structure
```
.
+-- http (volatile)
+-- http_dev
|   +-- app
|   +-- css
|   +-- js
|   +-- img
|   +-- test
|   --- .gitattributes
|   --- .gitignore
|   --- .htaccess
|   --- crossdomain.xml
|   --- index.html
|   --- 404.html
|   --- core.css
|   --- core.js
|   --- favicon.ico
|   --- apple-touch-icon.png
|   --- apple-touch-icon-precomposed.png
|   --- apple-touch-icon-57x57-precomposed.png
|   --- apple-touch-icon-72x72-precomposed.png
|   --- apple-touch-icon-114x114-precomposed.png
|   --- humans.txt
|   --- robots.txt
+-- working
|   +-- requirements
|   +-- designs
|   +-- wireframes
+-- build (nodejs deploy)
+-- compile (ant-build-script)
```


## Build Steps:

1. __Preprocess__ `.less` files into `.css`
2. __Move__ production files into `http/`
3. __Run__ Ant Build Script
4. __Deploy__ `http/` for production


## Preprocessing

__Ant Build Script__  

> "Optimizes your code for production"  
> Reduces application weight for deployment to production.  
> Branch: `compile/`  
> Github: `git://github.com/h5bp/ant-build-script.git`  

__LESS__  

> "The dynamic stylesheet language"  
> Tool for coding scalable cascading stylesheets.  
> Branch: `//css/less/build`  
> Github: `git://github.com/cloudhead/less.js.git`  


## JavaScript

__jQuery__  

> "New Wave JavaScript"  
> Standard library for DOM interaction.  
> Dependencies: none  
> Github: `git://github.com/jquery/jquery.git`  

__Head__  

> "The only script in your \<HEAD\>"  
> Used as a modular asynchronous script loader and modernizr.  
> Dependencies: none  
> Github: `git://github.com/headjs/headjs.git`  

__Backbone__  

> "MV* library"  
> Templating library.  
> Dependencies: `jQuery.js, Underscore.js`  
> Github: `git://github.com/documentcloud/backbone.git`  

__Underscore__  

> "Utility-belt library"  
> Extended library for common functions.  
> Github: `git://github.com/documentcloud/underscore.git`  
  
  
:)
