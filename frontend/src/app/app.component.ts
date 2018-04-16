import { Component } from '@angular/core';
import { QuestionComponent } from './questionM/question/question.component';
import { QuestionService } from './questionM/question.service';
import { Question } from './questionM/question/question.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [QuestionService]
})
export class AppComponent {
  title = 'app';
  private _questions : Question[];
  public errorMsg: string;
   constructor(private _questionDataService : QuestionService) {

   }
   ngOnInit(): void {
     //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
     //Add 'implements OnInit' to the class.
    // this._questions = this._questionDataService.questions;
    //this._questionDataService.questions..pipe(takeUntil(this.unsubscribe(items => this._questions = items);
    this._questionDataService.questions.subscribe(
      data => {this._questions = data},
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${
          error.status
        } while trying to retrieve questions: ${error.error}`;
      }
    );
  }

   get questions()  {
     return this._questions;
   }
   newQuestionAdded(question) {
    // this._questionDataService.addNewQuestion(question).subscribe();
    this._questionDataService.addNewQuestion(question)
     .subscribe(item => this._questions.push(item));
   }
   questionDeleted(question) {
     
   }
}
