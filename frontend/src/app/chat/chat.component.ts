import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';
import { ChatService } from './chat.service';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../userM/authentication.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [ChatService]
})
export class ChatComponent implements OnInit {
 
  private user : string;
  private room : string;
  private messageText : string;
  private messageArray:Array<{user:String, message:String}> =[];
  constructor(private _chatservice : ChatService, private _authservice : AuthenticationService) {
    this._chatservice.newUserJoined().subscribe(data => {
        this.messageArray.push(data);
    });
    this._chatservice.userLeftRoom().subscribe(data => {
      this.messageArray.push(data);
  });
  this._chatservice.messageRecieved().subscribe(data => {
    this.messageArray.push(data);
})
   }

  ngOnInit() {
  }
  join() {
    this._chatservice.joinRoom({user: this.user, room: this.room});
  }
  leave() {
    this._chatservice.leaveRoom({user: this.user, room: this.room});
  }
  sendMessage(data) {
    this._chatservice.sendMessage({user: this.user, room:this.room, message: this.messageText});
  }
 
}
