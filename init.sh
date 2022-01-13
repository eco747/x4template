#!/bin/bash
git submodule add https://github.com/eco747/x4.git

mkdir dist
mkdir src

cp ./assets/index.html ./dist
cp ./assets/*.less src