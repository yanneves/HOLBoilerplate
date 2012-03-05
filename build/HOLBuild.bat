@echo off
set nl =^&echo.

echo "# Set variables."
set dev_dir=../http_dev
set temp_dir=../http_temp
set css_dir=css
set less_dir=css/less

set css_core=core.css
set less_core=core.less
set less_js=http://cdnjs.cloudflare.com/ajax/libs/less.js/1.1.5/less-1.1.5.min.js

set less_call="<link rel=\"stylesheet/less\" href=\"%less_dir%/%less_core%\">"
set lessjs_call="<script src=\"%less_js%\"></script>"
set css_call="<link rel=\"stylesheet/css\" href=\"%css_dir%/%css_core%\">"

set fart=tools\fart.exe
set build_script=runbuildscript.bat

echo.

echo "# Copying development files into temporary directory."
xcopy "%dev_dir%" "%temp_dir%" /S /K /Y

echo.

echo "# Building LESS stylesheets."
cscript //nologo "%temp_dir%\%less_dir%\build\lessc.wsf" "%temp_dir%\%less_dir%\%less_core%" "%temp_dir%\%css_dir%\%css_core%"
echo y | rd /s "%temp_dir%\%less_dir%"

echo.

echo "# Running Find and Replace Text."
echo "# Replacing LESS call with CSS call."
%fart% --c-style -V "%temp_dir%\*.html" %less_call% %css_call%
%fart% --c-style -V "%temp_dir%\*.html" %lessjs_call% " "
echo "# Replacing CSS imports with correct paths."
%fart% --c-style -V "%temp_dir%\%css_dir%\%css_core%" "\"%css_dir%/" "\""

echo.

echo "# Running Ant-Build-Script."
call %build_script%