#!/bin/sh

echo "# Set variables."
dev_dir=../http_dev
temp_dir=../working/http_temp
prod_dir=../../appRoot/web/http
tools_dir=tools
config_dir=config
css_dir=css
less_dir=css
js_dir=js

css_core=core.css
less_core=core.less
less_js="\\/\\/cdnjs.cloudflare.com\\/ajax\\/libs\\/less.js\\/1.3.0\\/less-1.3.0.min.js"
js_core=core.js


less_call="link rel=\\\"stylesheet\\/less\\\" href=\\\"$less_dir\\/$less_core\\\""
lessjs_call="<script src=\\\"$less_js\\\"><\\/script>"
css_call="link rel=\\\"stylesheet\\\" href=\\\"$css_dir\\/$css_core\\\""

rhino=$tools_dir/rhino.jar
closure_compiler=$tools_dir/closure-compiler-v1346.jar
less_compiler=$tools_dir/lessc.wsf
r_js=$tools_dir/r.js
r_config=app.build.js

echo "# Copying development files into temporary directory."

if [ ! -d $temp_dir ]; then
mkdir $temp_dir
fi

rm -rf $temp_dir/

cp -r "$dev_dir" "$temp_dir"

echo "# Building LESS stylesheets."
lessc "$temp_dir/$less_dir/$less_core" > "$temp_dir/$css_dir/$css_core"

echo "# Running Find and Replace Text."
echo "# Replacing LESS call with CSS call." 
sed -i.bak -e "s/$less_call/$css_call/g" -e "s/$lessjs_call/ /g" $temp_dir/*.php
sed -i.bak -e "s/$less_call/$css_call/g" -e "s/$lessjs_call/ /g" $temp_dir/*.html

echo "# Running Ant-Build-Script."
ant build

echo "# Removing uncompliant JavaScript."
rm -rf "$prod_dir/$js_dir/*"

echo "# Running r.js compiler."
java -classpath $rhino:$closure_compiler org.mozilla.javascript.tools.shell.Main $r_js -o $config_dir/$r_config
