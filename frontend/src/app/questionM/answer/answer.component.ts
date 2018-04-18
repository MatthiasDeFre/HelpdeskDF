import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Answer } from './answer.model';


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

  quote() : boolean {
    this.quoteText.emit(this.answer.body);
    return true;
  }
}
