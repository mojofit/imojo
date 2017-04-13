import {Component} from "@angular/core";
import {Platform} from "ionic-angular";
import {StatusBar} from "@ionic-native/status-bar";
import {SplashScreen} from "@ionic-native/splash-screen";
import {HomePage} from "../pages/home/home";
import {Keyboard} from "@ionic-native/keyboard";

@Component({
  templateUrl: 'app.html'
})
export class MojoApp {
  rootPage: any = HomePage;

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public keyboard:Keyboard,
              public splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      keyboard.disableScroll(true);
    });
  }
}

