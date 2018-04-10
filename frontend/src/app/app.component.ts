import { Component } from '@angular/core';
import { QuestionComponent } from './question/question.component';
import { QuestionService } from './question.service';
import { Question } from './question/question.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [QuestionService]
})
export class AppComponent {
  title = 'app';
  private _questions;

   constructor(private _questionDataService : QuestionService) {

   }
   ngOnInit(): void {
     //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
     //Add 'implements OnInit' to the class.
     this._questions = this._questionDataService.questions;
   }

   get questions()  {
     return this._questions;
   }
   newQuestionAdded(question) {
     this._questionDataService.addNewQuestion(question).subscribe();
   }
}
