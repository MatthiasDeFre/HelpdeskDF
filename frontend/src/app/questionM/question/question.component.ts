import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from './question.model';
import { QuestionService } from '../question.service';
import { User } from '../../userM/user.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() public question : Question;
  constructor(private _questionDataService: QuestionService, private _router : Router) { }

  ngOnInit() {
  }

  get title() : string {
    return this.question.title;
  }

  get body() : string {
    return this.question.body;
  }
  get answerAmount() : number {
    return this.question.answerAmount;
  }
  test(){
    this._router.navigate(["/question", this.question.id]);
  }
}
