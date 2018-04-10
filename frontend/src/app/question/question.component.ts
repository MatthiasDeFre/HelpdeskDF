import { Component, OnInit, Input } from '@angular/core';
import { Question } from './question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() public question : Question;

  constructor() { }

  ngOnInit() {
  }

  get title() : string {
    return this.question.title;
  }

  get body() : string {
    return this.question.body;
  }

  test() : boolean{
    console.log("test3");
    return false;
  }
}
