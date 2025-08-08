#!/usr/bin/env bash
npm i -g http-server
npm run build && cd docs && http-server . && cd ..
