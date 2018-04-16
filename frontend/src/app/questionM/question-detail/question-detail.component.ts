import { Component, OnInit } from '@angular/core';
import { Question } from '../question/question.model';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {

  private _question : Question;

  constructor(private route : ActivatedRoute, private _questionService : QuestionService) {

   }

  ngOnInit() {
    this.route.data.subscribe(item => 
      this._question = item['question']);
    console.log(this._question);
  }
  get question() {
    return this._question;
  }

}
