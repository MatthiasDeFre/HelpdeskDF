import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { UserComponent } from './user/user.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    UserComponent,
    QuestionDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
