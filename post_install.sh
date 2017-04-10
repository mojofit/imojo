#!/bin/bash

rm -r resources
mkdir resources
cp assets/icons/*.png resources/
ionic resources ios
cp -r assets/imageset/* platforms/ios/imojo/Images.xcassets
