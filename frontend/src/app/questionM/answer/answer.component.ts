import { Component, OnInit, Input } from '@angular/core';
import { Answer } from './answer.model';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  @Input() public answer : Answer;
  constructor() { }

  ngOnInit() {
  }
  get body() : String {
    return this.answer.body;
  }

}
