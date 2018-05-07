import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';

import { QuestionModule } from './questionM/question.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserModule } from './userM/user.module';
import { ChatComponent } from './chat/chat.component';
import { FormsModule } from '@angular/forms';
import { basehttpInterceptorProviders } from './interceptors';
import { httpInterceptorProviders } from './http-interceptors';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ChatComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    QuestionModule,
    UserModule,
    AppRoutingModule,
    FormsModule
  ],
  bootstrap: [AppComponent],
  providers: [ 
    httpInterceptorProviders]
})
export class AppModule { }
