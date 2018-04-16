import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Question } from '../question/question.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  private _questions : Question[];
  public errorMsg: string;
   constructor(private _questionDataService : QuestionService) {

   }

   ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
   // this._questions = this._questionDataService.questions;
   //this._questionDataService.questions..pipe(takeUntil(this.unsubscribe(items => this._questions = items);
   console.log("tst");
   this._questionDataService.questions.subscribe(
     data => {
       console.log(data);
       this._questions = data;
       console.log(this._questions);
      },
     (error: HttpErrorResponse) => {
       this.errorMsg = `Error ${
         error.status
       } while trying to retrieve questions: ${error.error}`;
     }
   );
   console.log(this._questions + "test");
 }
get questions() {
  return this._questions;
}

}
