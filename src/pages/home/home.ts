import {Component, EventEmitter, NgZone, ViewChild} from "@angular/core";
import {ChatMessage, MessageType, SocketService} from "../../providers";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('txtChat') txtChat: any;
  @ViewChild('content') content: any;
  messages: any[];
  chatBox: string;
  btnEmitter:EventEmitter<string>;

  constructor(public _zone: NgZone,
              public socketService: SocketService) {
    this.btnEmitter = new EventEmitter<string>();
    this.messages = [];
    this.chatBox = "";
    this.init();
  }

  ionViewWillEnter() {
    this.socketService.connect();
  }

  ionViewWillLeave() {
    this.socketService.disconnect();
  }

  init() {

    this.messages.push({
      type:MessageType.MSG_REQ,
      message:"hello request"
    });

    this.messages.push({
      type:MessageType.MSG_RES,
      message:"hello response"
    });




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
    this.socketService.newRequest(this.formatMessage(message));
    this.chatBox = '';
    this.scrollToBottom();
  }

  formatMessage(message: string) {
    return {
      type: MessageType.MSG_REQ,
      from: 'annaggarwal@paypal.com',
      message: message
    };
  }

  scrollToBottom() {
    this._zone.run(() => {
      setTimeout(() => {
        this.content.scrollToBottom(300);
      });
    });
  }
}
