import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from './authentication.service';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuardService } from './auth-guard.service';
import { basehttpInterceptorProviders } from '../interceptors';
import { httpInterceptorProviders } from '../http-interceptors';
import { UserComponent } from './user.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'register', component: RegisterComponent },
 
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: [LoginComponent, RegisterComponent, LogoutComponent, UserComponent],
  providers: [
    AuthenticationService,
    AuthGuardService,
    httpInterceptorProviders

  ]
})
export class UserModule { }
