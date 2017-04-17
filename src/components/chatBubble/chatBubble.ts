import {Component} from "@angular/core";
import {ChatMessage, MessageType, UtilService} from "../../providers";

@Component({
  selector: 'chat-bubble',
  inputs: ['chatMessage'],
  templateUrl: 'chatBubble.html'
})
export class ChatBubble {
  public chatMessage: ChatMessage;
  public messageType = MessageType;

  constructor() {

  }

  formatEpoch(epoch): string {
    return UtilService.getCalendarDay(epoch);
  }
}
