import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import { CHAT_URL } from '../../environments/environment';
@Injectable()
export class ChatService {
  private socket;
  constructor() {
    console.log("connecting");
    this.socket = io(CHAT_URL);
    console.log("connected");
   }

   joinRoom(data) {
     this.socket.emit("join", data);
   }
   leaveRoom(data) {
    this.socket.emit("leave", data);
  }
  sendMessage(data) {
    console.log(data);
    this.socket.emit("message", data);
  }
   newUserJoined() {
    let observable = new Observable<{user: String, message:String}>(observer=>{
      this.socket.on("new user joined",(data)=> {
          observer.next(data);
      });
      return () => {this.socket.disconnect();}
    });
    return observable;
  }

  userLeftRoom() {
    let observable = new Observable<{user: String, message:String}>(observer=>{
      this.socket.on("left room",(data)=> {
          observer.next(data);
      });
      return () => {this.socket.disconnect();}
    });
    return observable;
  }
  messageRecieved() {
    let observable = new Observable<{user: String, message:String}>(observer=>{
      this.socket.on("new message",(data)=> {
          observer.next(data);
      });
      return () => {this.socket.disconnect();}
    });
    return observable;
  }
  
}
