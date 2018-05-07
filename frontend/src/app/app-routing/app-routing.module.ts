import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { ChatComponent } from '../chat/chat.component';
import { AuthGuardService } from '../userM/auth-guard.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/questions', pathMatch: 'full'},
  { path: 'chat', canActivate: [ AuthGuardService ],component: ChatComponent },
  { path: '**', component: PageNotFoundComponent},
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
