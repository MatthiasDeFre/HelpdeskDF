import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddQuestionComponent } from './add-question/add-question.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { QuestionComponent } from './question/question.component';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { ReactiveFormsModule } from "@angular/forms";
import { QuestionService } from './question.service';
import { Routes, RouterModule } from '@angular/router';
import { Question } from './question/question.model';
import { QuestionResolver } from './question-resolver';
import { AnswerComponent } from './answer/answer.component';
import { AddAnswerComponent } from './add-answer/add-answer.component';
import { httpInterceptorProviders } from '../http-interceptors';
import { AuthGuardService } from '../userM/auth-guard.service';
import { basehttpInterceptorProviders } from '../interceptors';
import { AdminGuardService } from '../userM/admin-guard.service';

const appRoutes: Routes = [
  { path: 'questions', component: QuestionListComponent },
  { path: 'addquestion',canActivate: [ AuthGuardService ], component: AddQuestionComponent },
  { path: 'question/:id', component: QuestionDetailComponent, resolve: {question: QuestionResolver} },
];

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: [
    QuestionComponent,
    QuestionDetailComponent,
    AnswerComponent,
    QuestionListComponent,
    AddQuestionComponent,
    AddAnswerComponent
  ],
  providers: [
    QuestionService,
    QuestionResolver,
    httpInterceptorProviders
  ]
})
export class QuestionModule {
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
