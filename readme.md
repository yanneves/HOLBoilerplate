# HOLBoilerplate
__H5BP-OOCSS-LESS-BBBP Boilerplate__


## Runtime Structure

```
-> 	Meta Headers
	-> 	Chromeframe
	-> 	DNS-Prefetch
	-> 	Title, Description
	-> 	Viewport Optimised
-> 	Core CSS
	-> 	Link to single, minified,
		concatenated, obfuscated,
		LESS-preprocessed, versioned,
		stylesheet
-> 	Head JS
	-> 	Modernizr
	->	Respond
	->	Head (loader)
	-> 	Log Handling
-> 	Body
	->	Header
	->	Body
	->	Footer
->	Core JS
	->	Asynchronous Scripts
	->	Application Index
->	Google Analytics
```


## Documentation

### File Structure
```
.
+-- http (volatile)
+-- http_dev
|   +-- css
|   |   +-- less
|   |   |   --- core.less
|   |   |   --- style.less
|   |   +-- modules
|   |   |   --- grids.css
|   |   |   --- sprites.css
|   |   |   --- reset.css
|   +-- js
|   |   +-- modules
|   |   +-- templates
|   |   --- head.js
|   |   --- core.js
|   +-- img
|   +-- fonts
|   +-- test
|   --- .htaccess
|   --- crossdomain.xml
|   --- index.html
|   --- elements.html
|   --- grids.html
|   --- 404.html
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
+-- build (ant-build-script)
--- .gitattributes
--- .gitignore
--- readme.md
```


### Build Steps:

1. __Preprocess__ `.less` files into `.css`
2. __Run__ Ant Build Script
3. __Deploy__ `http/` for production


### Preprocessing

#### Ant Build Script

> "Optimizes your code for production"  
> Reduces application weight for deployment to production.  
> Branch: `build/`  
> Github: `git://github.com/h5bp/ant-build-script.git`  

#### LESS

> "The dynamic stylesheet language"  
> Tool for coding scalable cascading stylesheets.  
> Github: `git://github.com/cloudhead/less.js.git`  


### CSS

#### Reset

> HTML5 Boilerplate stylesheet for normalization.  
> Namespace: _All_ elements, helpers  

#### Grids

> OOCSS elastic grid layout  
> Namespace: `.line`, `.unit`  

#### Sprites

> Blank library for sprite management  
> Namespace: none  


### JavaScript

#### jQuery

> "New Wave JavaScript"  
> Standard library for DOM interaction.  
> Dependencies: none  
> Github: `git://github.com/jquery/jquery.git`  

#### Modernizr

> "Front-end development done right"  
> For feature detection and polyfilling.  
> Dependencies: none  
> Github: `git://github.com/Modernizr/Modernizr.git`  

#### Respond

> "A fast & lightweight polyfill for min/max-width CSS3 Media Queries"  
> CSS3 Media Queries polyfill.  
> Dependencies: none  
> Github: `git://github.com/scottjehl/Respond.git`  

#### Head

> "The only script in your \<HEAD\>"  
> Used as a modular asynchronous script loader.  
> Dependencies: none  
> Github: `git://github.com/headjs/headjs.git`  

#### Underscore

> "Utility-belt library"  
> Extended library for common functions.  
> Github: `git://github.com/documentcloud/underscore.git`  

#### Backbone

> "MV* library"  
> Templating library.  
> Dependencies: `jQuery.js, Underscore.js`  
> Github: `git://github.com/documentcloud/backbone.git`  


## Goals & Milestones

### Feature Requests

* small batch process to run build steps above
* boilerplate needs testing

### Releases

* (2012-02-17) v0.1 HOLBoilerplate scraped together following years of experience and perfectionism

: )
