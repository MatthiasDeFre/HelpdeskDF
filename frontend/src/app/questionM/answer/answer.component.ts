import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Answer } from './answer.model';
import { BACKEND_URL } from '../../../environments/environment';


@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  @Output() public quoteText = new EventEmitter<String>();
  @Input() public answer : Answer;
  
  constructor() { }

  ngOnInit() {
  }
  get id() : String {
    return this.answer.id;
  }
  get body() : String {
    return this.answer.body;
  }
  get datePosted() : Date  {

    return this.answer.datePosted;
  }
  get poster() : String {
  
    return this.answer.poster.name;
  }
 get avatarUrl() : String {
   console.log(this.answer.poster);
   let back = BACKEND_URL == null ? "" : BACKEND_URL;
   return "image"+back + "/" +this.answer.poster.avatar;
 }
  quote() : boolean {
    this.quoteText.emit(this.answer.body);
    return true;
  }
}
