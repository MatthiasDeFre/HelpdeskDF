import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Answer } from './answer.model';
import { BACKEND_URL } from '../../../environments/environment';
import { Router } from '@angular/router';
import { QuestionService } from '../question.service';
import { AuthenticationService } from '../../userM/authentication.service';
import { Question } from '../question/question.model';


@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  @Output() public quoteText = new EventEmitter<String>();
  @Input() public answer : Answer;
  @Input() public question : Question;
  
  constructor(private _questionService : QuestionService, private router : Router,  private authService: AuthenticationService) { }

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
   return "http://res.cloudinary.com/helpdeskdefre/image/upload/" +this.answer.poster.avatar;
 }
  quote() : boolean {
    this.quoteText.emit(this.answer.body);
    return true;
  }
  
  get posterIsLoggedIn() : boolean{
   
    return this.authService.user$.getValue() != null && this.authService.user$.getValue().id == this.answer.poster.id;
  }
  deleteAnswer() {
    this._questionService.deleteAnswer(this.question, this.answer).subscribe((item)=>{
      this.question.removeAnswer(item);
    });
  }
}
