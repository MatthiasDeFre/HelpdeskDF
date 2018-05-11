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
import { AdminGuardService } from './admin-guard.service';
import { AdminOverviewComponent } from './admin-overview/admin-overview.component';
import { AdminDataService } from './admin-data.service';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', canActivate: [AdminGuardService], component: AdminOverviewComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: [LoginComponent, RegisterComponent, LogoutComponent, UserComponent, AdminOverviewComponent],
  providers: [
    AuthenticationService,
    AuthGuardService,
    AdminGuardService,
    AdminDataService,
    httpInterceptorProviders

  ]
})
export class UserModule { }
