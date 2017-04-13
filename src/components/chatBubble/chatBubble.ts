import {Component} from "@angular/core";
import {ChatMessage, MessageType} from "../../providers/model";

@Component({
  selector: 'chat-bubble',
  inputs: ['chatMessage'],
  templateUrl: 'chatBubble.html'
})
export class ChatBubble {
  public chatMessage: ChatMessage;
  public messageType = MessageType;
}
