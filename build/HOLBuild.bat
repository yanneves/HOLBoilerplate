@echo off
set nl =^&echo.

echo "# Set variables."
set dev_dir=../http_dev
set temp_dir=../working/http_temp
set prod_dir=../../appRoot/web/http
set tools_dir=tools
set config_dir=config
set css_dir=css
set less_dir=css
set js_dir=js

set css_core=core.css
set less_core=core.less
set less_js=//cdnjs.cloudflare.com/ajax/libs/less.js/1.3.0/less-1.3.0.min.js
set js_core=core.js

set less_call="<link rel=\"stylesheet/less\" href=\"%less_dir%/%less_core%\">"
set lessjs_call="<script src=\"%less_js%\"></script>"
set css_call="<link rel=\"stylesheet\" href=\"%css_dir%/%css_core%\">"

set rhino=%tools_dir%\rhino.jar
set closure_compiler=%tools_dir%\closure-compiler-v1346.jar
set less_compiler=%tools_dir%\lessc.wsf
set r_js=%tools_dir%\r.js
set fart=%tools_dir%\fart.exe
set build_script=runbuildscript.bat

set r_config=app.build.js

echo.

echo "# Copying development files into temporary directory."
rd /s /q "%temp_dir%"
echo d | xcopy "%dev_dir%" "%temp_dir%" /S /K /Y

echo.

echo "# Building LESS stylesheets."
cscript //nologo "%less_compiler%" "%temp_dir%\%less_dir%\%less_core%" "%temp_dir%\%css_dir%\%css_core%"
echo #java -jar %rhino% %less_compiler% "%temp_dir%\%less_dir%\%less_core%" "%temp_dir%\%css_dir%\%css_core%"

echo.

echo "# Running Find and Replace Text."
echo "# Replacing LESS call with CSS call."
%fart% --c-style -V "%temp_dir%\*.html" %less_call% %css_call%
%fart% --c-style -V "%temp_dir%\*.php" %less_call% %css_call%
%fart% --c-style -V "%temp_dir%\*.html" %lessjs_call% " "
%fart% --c-style -V "%temp_dir%\*.php" %lessjs_call% " "

echo.

echo "# Running Ant-Build-Script."
call %build_script%

echo.

echo "# Removing uncompliant JavaScript."
rd /s /q "%prod_dir%\%js_dir%"
echo "# Running r.js compiler."
java -classpath %rhino%;%closure_compiler% org.mozilla.javascript.tools.shell.Main %r_js% -o %config_dir%\%r_config%