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


   constructor(private _questionDataService : QuestionService) {

   }

   get questions() : Question[] {
     return this._questionDataService.questions;
   }
}
