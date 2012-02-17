# HOLBoilerplate
__H5BP-OOCSS-LESS-BBBP Boilerplate__


## File Structure
```
.
+-- http (volatile)
+-- http_dev
�   +-- app
�   +-- css
�   +-- js
�   +-- img
�   +-- test
�   --- .gitattributes
�   --- .gitignore
�   --- .htaccess
�   --- crossdomain.xml
�   --- index.html
�   --- 404.html
�   --- core.css
�   --- core.js
�   --- favicon.ico
�   --- apple-touch-icon.png
�   --- apple-touch-icon-precomposed.png
�   --- apple-touch-icon-57x57-precomposed.png
�   --- apple-touch-icon-72x72-precomposed.png
�   --- apple-touch-icon-114x114-precomposed.png
�   --- humans.txt
�   --- robots.txt
+-- working
�   +-- requirements
�   +-- designs
�   +-- wireframes
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
> Branch: `compile/`  
> Github: (fork) `git@github.com:Aaunel/ant-build-script.git`  

__LESS__  

> "The dynamic stylesheet language"  
> Branch: `//css/less/build`  
> Github: (fork) `git@github.com:Aaunel/less.js.git`  


## JavaScript

__jQuery__  

> "New Wave JavaScript"  
> Branch: `//js/libs/jquery/jquery.js`  
> Github: (fork) `git@github.com:Aaunel/jquery.git`  

__Head__  

> "The only script in your \<HEAD\>"  
> Branch: `//js/head/head.js`  
> Github: (fork) `git@github.com:Aaunel/headjs.git`  

__Backbone__  

> "MV* library"  
> Branch: `//js/libs/backbone/backbone.js`  
> Github: (fork) `git@github.com:Aaunel/backbone.git`  

__Underscore__  

> "Utility-belt library"  
> Branch: `//js/libs/underscore/underscore.js`  
> Github: (fork) `git@github.com:Aaunel/underscore.git`  
  
  
:)
