import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from './question.model';
import { QuestionService } from '../question.service';
import { User } from '../user/user.model';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() public question : Question;
  constructor(private _questionDataService: QuestionService) { }

  ngOnInit() {
  }

  get title() : string {
    return this.question.title;
  }

  get body() : string {
    return this.question.body;
  }

  test() : boolean{
    console.log(this.question.body + " " + this.question.id);
    this._questionDataService.deleteQuestion(this.question).subscribe();
    this._questionDataService.addNewQuestion(new Question(new User("Iemand"), "testttt", "testtt", new Date())).subscribe();
    //this.question = null;
    return false;
  }
}
