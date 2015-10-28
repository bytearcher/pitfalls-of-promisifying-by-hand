#!/bin/bash

set -e
set -x

# . ~/.nvm/nvm.sh

# version=`node -p -e 'require("./package").engines.node'`

# nvm install $version
# nvm use $version
# npm install
npm test
