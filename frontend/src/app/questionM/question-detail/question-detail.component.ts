import { Component, OnInit } from '@angular/core';
import { Question } from '../question/question.model';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {

  private _question : Question;

  constructor(private route : ActivatedRoute, private _questionService : QuestionService, private router : Router) {

   }

  ngOnInit() {
    this.route.data.subscribe(item =>   
      this._question = item['question'],
      () => this.router.navigate["**"]
    );
    console.log(this._question);
  }
  
  get id() {
    return this._question.id;
  }
  get question() {
    return this._question;
  }

}
