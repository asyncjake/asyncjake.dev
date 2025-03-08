#!/usr/bin/env bash

read -p "Copying out/ to docs/ with force, <C-c> to bail, enter to accept:" sendit

rm -rf docs/
cp -r out docs

echo "Copy complete, git ops are up to you"
