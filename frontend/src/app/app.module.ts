import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';

import { QuestionModule } from './questionM/question.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,

   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    QuestionModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
