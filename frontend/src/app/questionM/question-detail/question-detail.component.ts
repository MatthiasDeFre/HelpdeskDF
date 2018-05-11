import { Component, OnInit } from '@angular/core';
import { Question } from '../question/question.model';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../question.service';
import { AuthenticationService } from '../../userM/authentication.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {

  private _question : Question;

  constructor(private route : ActivatedRoute, private _questionService : QuestionService, private router : Router, private authService: AuthenticationService ) {

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

  get postername() {
    return this._question.poster.name;
  }
  get posterIsLoggedIn() : boolean{
   
    return this.authService.user$.getValue() != null && this.authService.user$.getValue().id == this._question.poster.id;
  }

  deleteQuestion() {
   this._questionService.deleteQuestion(this._question).subscribe(
     (item) => {
       console.log(item);
     },
     () =>{},
     () => this.router.navigate(["/"])
   );
  }

}
