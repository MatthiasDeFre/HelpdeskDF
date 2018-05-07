import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthenticationService } from './userM/authentication.service';
import { Observable } from 'rxjs/Observable';
import { User } from './userM/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
  constructor(private authService: AuthenticationService) {}

  get currentUser(): Observable<String> {
   //blabla
    return this.authService.username$;
  }
}
