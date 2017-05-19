# imojo

<img src="1.png" alt="1" width="250"/> <img src="2.png" alt="2" width="250"/>

## Prerequisites
- Download nodejs from https://nodejs.org/en/download/current/ It will install `node` and `npm`
```bash
node -v
 - should be >= 6.0.0
npm -v
 - should be >= 3.0.0
```
- For iOS, update XCode version to 8.0 or higher

## Getting Started

* Clone this repository

* Install Ionic, cordova and node_modules

    ```bash
    $ npm uninstall -g ionic cordova
    $ npm install -g ionic cordova
    $ npm install
    ```

## Run

#### Browser
```bash
    # iOS 
    ionic serve --platform ios
    # Android
    ionic serve --platform android
    # All Platforms(iOS, Android and Windows)
    ionic serve --lab
```

### Android

```bash
    $ ionic platform add android
    $ ionic build android --prod
    $ ionic run android --prod
```

### iOS
```bash
    $ ionic platform add ios
    $ ionic build ios --prod
```    
    Run using XCode
    
### icon resources
Run post_install script
```bash
    $ ./post_install.sh
```    
    
## Contribution
Contributions are welcome!

* Report issues
* Open pull request with improvements
* Spread the word

## License
imojo is available under the MIT license. See the LICENSE file for more info.
