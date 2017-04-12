import {Component, NgZone} from "@angular/core";
import {SocketService} from "../../providers";
import {ChatMessage, MessageType} from "../../providers/model";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  messages: any;
  chatBox: string;

  constructor(public zone: NgZone,
              public socketService: SocketService) {
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
    this.socketService.messages.subscribe((chatMessage: ChatMessage) => {
      let message = '';
      if (chatMessage.type === MessageType.MSG_REQ) {
        message = "From client - " + chatMessage.message;
      } else if (chatMessage.type === MessageType.MSG_RES) {
        message = "From server - " + chatMessage.message;
      }
      this.zone.run(() => {
        this.messages.push(message);
      });
    });
  }

  send(message) {
    this.socketService.newRequest(this.formatMessage(message));
    this.chatBox = '';
  }

  formatMessage(message: string) {
    return {
      type: MessageType.MSG_REQ,
      from: 'annaggarwal@paypal.com',
      message: message
    };
  }
}
