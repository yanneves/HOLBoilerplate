# HOLBoilerplate
__H5BP-OOCSS-LESS-BBBP Boilerplate__


## Documentation

### File Structure
```
.
+-- http (volatile)
+-- http_dev
|   +-- app
|   +-- css
|   +-- js
|   +-- img
|   +-- test
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
+-- deploy (nodejs deploy)
+-- build (ant-build-script)
--- .gitattributes
--- .gitignore
--- readme.md
```


### Build Steps:

1. __Preprocess__ `.less` files into `.css`
2. __Move__ production files into `http/`
3. __Run__ Ant Build Script
4. __Deploy__ `http/` for production


### Preprocessing

#### Ant Build Script

> "Optimizes your code for production"  
> Reduces application weight for deployment to production.  
> Branch: `build/`  
> Github: `git://github.com/h5bp/ant-build-script.git`  

#### LESS

> "The dynamic stylesheet language"  
> Tool for coding scalable cascading stylesheets.  
> Branch: `//css/less/build`  
> Github: `git://github.com/cloudhead/less.js.git`  


### JavaScript

#### jQuery

> "New Wave JavaScript"  
> Standard library for DOM interaction.  
> Dependencies: none  
> Github: `git://github.com/jquery/jquery.git`  

#### Head

> "The only script in your \<HEAD\>"  
> Used as a modular asynchronous script loader and modernizr.  
> Dependencies: none  
> Github: `git://github.com/headjs/headjs.git`  

#### Backbone

> "MV* library"  
> Templating library.  
> Dependencies: `jQuery.js, Underscore.js`  
> Github: `git://github.com/documentcloud/backbone.git`  

#### Underscore

> "Utility-belt library"  
> Extended library for common functions.  
> Github: `git://github.com/documentcloud/underscore.git`  


## Goals & Milestones

### Feature Requests

* small batch process to run build steps above
* boilerplate needs testing

### Releases

* (2012-02-17) v0.1 HOLBoilerplate scraped together following years of experience and perfectionism

: )
