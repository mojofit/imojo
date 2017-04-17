import {Injectable} from "@angular/core";
import moment from "moment";
import {ChatMessage, MessageType} from "./model";


@Injectable()
export class UtilService {

  constructor() {
  }

  static getEpoch(): number {
    return moment().unix();
  }

  static getCalendarDay(epoch: number): string {
    if (!epoch) {
      return null;
    }
    let timeString = 'h:mm A';
    return moment(epoch * 1000).calendar(null, {
      sameDay: '[Today] ' + timeString,
      lastDay: '[Yesterday] ' + timeString,
      sameElse: 'MM/DD ' + timeString
    });
  }

  static formatMessageRequest(message: string, from: string): ChatMessage {
    return {
      type: MessageType.MSG_REQ,
      from: from,
      message: message
    };
  }
}

