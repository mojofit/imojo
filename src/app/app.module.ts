import {BrowserModule} from "@angular/platform-browser";
import {ErrorHandler, NgModule} from "@angular/core";
import {IonicApp, IonicErrorHandler, IonicModule} from "ionic-angular";
import {SplashScreen} from "@ionic-native/splash-screen";
import {StatusBar} from "@ionic-native/status-bar";

import {DatabaseService, Sql} from "../providers";
import {MojoApp} from "./app.component";
import {HomePage} from "../pages/home/home";

@NgModule({
  declarations: [
    MojoApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MojoApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MojoApp,
    HomePage
  ],
  providers: [
    Sql,
    DatabaseService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
