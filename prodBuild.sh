#!/bin/bash

ionic platform rm ios
ionic platform add ios
ionic plugin rm cordova-plugin-console
ionic build ios --prod
cp -r assets/imageset/* platforms/ios/imojo/Images.xcassets
