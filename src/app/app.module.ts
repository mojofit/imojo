import {BrowserModule} from "@angular/platform-browser";
import {ErrorHandler, NgModule} from "@angular/core";
import {IonicApp, IonicErrorHandler, IonicModule} from "ionic-angular";
import {SplashScreen} from "@ionic-native/splash-screen";
import {StatusBar} from "@ionic-native/status-bar";
import {Keyboard} from "@ionic-native/keyboard";


import {DatabaseService, SocketService, Sql} from "../providers";
import {MojoApp} from "./app.component";
import {HomePage} from "../pages/home/home";
import {ElasticTextarea} from "../components/elasticTextarea";
import {ChatBubble} from "../components/chatBubble";
import {KeyboardAttachDirective} from "../directives";

@NgModule({
  declarations: [
    MojoApp,
    HomePage,
    ElasticTextarea,
    ChatBubble,
    KeyboardAttachDirective
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
    SocketService,
    StatusBar,
    SplashScreen,
    Keyboard,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
