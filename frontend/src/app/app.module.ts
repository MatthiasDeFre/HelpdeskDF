import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
