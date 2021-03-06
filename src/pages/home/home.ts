import {Component, EventEmitter, NgZone, ViewChild} from "@angular/core";
import {ChatMessage, DatabaseService, SocketService, UtilService} from "../../providers";
import * as _ from "lodash";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('txtChat') txtChat: any;
  @ViewChild('content') content: any;
  messages: any[];
  chatBox: string;
  btnEmitter: EventEmitter<string>;

  constructor(public _zone: NgZone,
              public databaseService: DatabaseService,
              public socketService: SocketService) {
    this.btnEmitter = new EventEmitter<string>();
    this.messages = [];
    this.chatBox = "";
    this.init();
  }

  ionViewWillEnter() {
    this.databaseService.getJson("messages")
      .then(messages => {
        if (messages) {
          this.messages = this.messages.concat(_.sortBy(messages, ['epoch']));
        }
        this.scrollToBottom();
      });
    this.socketService.connect();
  }

  ionViewWillLeave() {
    this.socketService.disconnect();
  }

  init() {
    this.socketService.messages.subscribe((chatMessage: ChatMessage) => {
      this._zone.run(() => {
        this.messages.push(chatMessage);
      });
      this.scrollToBottom();
    });
  }

  public sendMessage() {
    this.btnEmitter.emit("sent clicked");
    this.txtChat.setFocus();
    let message = this.txtChat.content;
    this.send(message);
    this.txtChat.clearInput();
  }

  send(message) {
    //todo read email from database
    let from = "annaggarwal@paypal.com";
    this.socketService.newRequest(UtilService.formatMessageRequest(message, from));
    this.chatBox = '';
    this.scrollToBottom();
  }

  scrollToBottom() {
    this._zone.run(() => {
      setTimeout(() => {
        this.content.scrollToBottom(300);
      });
    });
  }
}
