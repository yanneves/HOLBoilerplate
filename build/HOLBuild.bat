@echo off
set nl =^&echo.

echo "# Set variables."
set dev_dir=../http_dev
set temp_dir=../working/http_temp
set prod_dir=../../appRoot/web/http
set tools_dir=tools
set config_dir=config
set js_dir=js

set js_core=core.js

set rhino=%tools_dir%\rhino.jar
set closure_compiler=%tools_dir%\closure-compiler-v1346.jar
set r_js=%tools_dir%\r.js
set build_script=runbuildscript.bat

set r_config=app.build.js

echo.

echo "# Copying development files into temporary directory."
rd /s /q "%temp_dir%"
echo d | xcopy "%dev_dir%" "%temp_dir%" /S /K /Y

echo.

echo "# Running Ant-Build-Script."
call %build_script%

echo.

echo "# Removing uncompliant JavaScript."
rd /s /q "%prod_dir%\%js_dir%"
echo "# Running r.js compiler."
java -classpath %rhino%;%closure_compiler% org.mozilla.javascript.tools.shell.Main %r_js% -o %config_dir%\%r_config%