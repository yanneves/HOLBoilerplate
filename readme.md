# HOLBoilerplate
__H5BP-OOCSS-LESS-BBBP Boilerplate__


## Runtime Structure

```
-> 	Meta Headers
	-> 	Chromeframe
	-> 	DNS-Prefetch
	-> 	Title, Description
	-> 	Viewport Optimised
	->	Favicons / Shortcut Icons
	->	ClearType
-> 	Core CSS
	-> 	Link to single, minified,
		concatenated, obfuscated,
		LESS-preprocessed, versioned,
		stylesheet
	-> 	Google Fonts Cache
-> 	Head JS
	-> 	Modernizr
	->	Respond
	->	Require (Core)
	-> 	Log Handling
-> 	Body
	->	IE6 Banner
	->	Header
	->	Complementary
	->	Body
	->	Footer
->	Google Analytics
```


## Documentation

### File Structure
```
.
+-- http (volatile)
+-- http_dev
|   +-- css
|   |   --- core.less
|   |   +-- modules
|   |   |	+-- lessoocss
|   |   |	|	--- grids.css.less
|   |   |   --- helpers.less
|   |   |   --- reset.less
|   |   |   --- sprites.less
|   |   |   --- normalize.css.less
|   |   |   --- zocial.css.less
|   +-- js
|   |   +-- app
|   |   |	+-- libs
|   |   |	|	+-- require
|   |   |	|	|	--- order.js
|   |   |	|	|	--- text.js
|   |   |	|	+-- underscore
|   |   |	|	|	--- min-amd.js
|   |   |	|	+-- backbone
|   |   |	|	|	--- min-amd.js
|   |   |	|	|	--- localstorage.js
|   |   |	|	--- boilerplate.js
|   |   |	+-- models
|   |   |	|	--- example.js
|   |   |	+-- views
|   |   |	|	+-- tests
|   |   |	|	|	--- elements.js
|   |   |	|	|	--- grids.js
|   |   |	|	|	--- zocials.js
|   |   |	|	--- example.js
|   |   |	+-- collections
|   |   |	|	--- example.js
|   |   |   --- index.js
|   |   |   --- router.js
|   |   --- head.js
|   |   --- core.js
|   +-- img
|   |   +-- apple-touch-icons
|   |   |	--- apple-touch-icon.png
|   |   |	--- apple-touch-icon-72x72-precomposed.png
|   |   |	--- apple-touch-icon-114x114-precomposed.png
|   |   |	--- apple-touch-icon-144x144-precomposed.png
|   |   |	--- apple-touch-icon-precomposed.png
|   +-- fonts
|   |   --- zocial-regular-webfont.eot
|   |   --- zocial-regular-webfont.svg
|   |   --- zocial-regular-webfont.ttf
|   |   --- zocial-regular-webfont.woff
|   +-- templates
|   |   +-- tests
|   |   |	--- elements.html
|   |   |	--- grids.html
|   |   |	--- zocials.html
|   |   --- example.html
|   +-- test
|   |   +-- unit
|   |   |	--- core.js
|   |   +-- vendor
|   |   |	--- jslitmus.js
|   |   |	--- qunit.js
|   |   |	--- qunit.css
|   |   --- index.html
|   --- .htaccess
|   --- crossdomain.xml
|   --- index.html
|   --- 404.html
|   --- favicon.ico
|   --- humans.txt
|   --- robots.txt
+-- working
|   +-- requirements
|   +-- designs
|   +-- wireframes
|   +-- intermediate (volatile)
|   +-- http_temp (volatile)
+-- build (ant-build-script)
|   --- HOLBuild.bat
--- .gitattributes
--- .gitignore
--- readme.md
```


### Build Steps:

> `build/HOLBuild.bat` now handles this!

1. __Preprocess__ `.less` files into `.css`
2. __Replace__ calls to `.less` files with call to `.css`
3. __Run__ Ant Build Script
4. __Run__ Require (r.js) Compiler
5. __Deploy__ `http/` for production


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

* swap from Ant to Node Build Script
* contribute `LESS` and `r.js` compilation to Build Script

### Releases

* (2012-03-20) v0.3 MVC / AMD architecture implemented for applications development
* (2012-03-05) v0.2 HOLBuild implemented for customised build process
* (2012-02-17) v0.1 HOLBoilerplate scraped together following years of experience and perfectionism

: )
