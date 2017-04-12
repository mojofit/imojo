export class MessageType {
  static readonly MSG_REQ: string = "message_request";
  static readonly MSG_RES: string = "message_response"
}

export interface ChatMessage {
  type: MessageType;
  from: string;
  message: any;
}


