import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import * as io from "socket.io-client";
import {ChatMessage, MessageType} from "./model";
import {SOCKET_HOST} from "./constants";
import Socket = SocketIOClient.Socket;
import {UtilService} from "./util.service";

@Injectable()
export class SocketService {
  public messages: Observable<ChatMessage>;
  private socketObserver: any;
  private socket: Socket;

  constructor() {
    this.messages = Observable.create(observer => {
      this.socketObserver = observer;
    });
    this.init();
  }

  init() {
    this.socket = io(SOCKET_HOST, {autoConnect: false});

    this.socket.on("connect", () => {
      console.debug('***Socket Connected***');
    });

    this.socket.on("reconnecting", attempt => {
      console.debug('***Socket Reconnecting***', attempt);
    });

    this.socket.on("reconnect_failed", () => {
      console.debug('***Socket Reconnect failed***');
    });

    this.socket.on('disconnect', () => {
      console.debug('***Socket Disconnected***');
    });

    this.socket.on(MessageType.MSG_RES, response => {
      let chatMessage: ChatMessage = response;
      if (typeof response === 'string') {
        chatMessage = {
          type: MessageType.MSG_RES,
          from: '',
          message: response
        };
      }
      chatMessage.epoch = UtilService.getEpoch();
      this.socketObserver.next(chatMessage);
    });
  }

  disconnect() {
    this.socket.disconnect();
  }

  connect() {
    this.socket.connect();
  }

  newRequest(chatMessage: ChatMessage) {
    chatMessage.epoch = UtilService.getEpoch();
    this.socketObserver.next(chatMessage);
    this.socket.emit(MessageType.MSG_REQ, chatMessage);
  }
}
