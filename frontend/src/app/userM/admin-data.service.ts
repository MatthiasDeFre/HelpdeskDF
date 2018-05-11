import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from './user.model';
import { map } from 'rxjs/operators';

@Injectable()
export class AdminDataService {

  private readonly _appUrl = '/API';
  constructor(private http : HttpClient) { }
  get Users() : Observable<User[]>{
    /* return this.http.get(this._appUrl+"/questions")
          .pipe(map((list: any[]):Question[] => list.map(item =>
            new Question(new User("Iemand"), item.body, item.title, item.date)
          )));*/
          return this.http
          .get(`${this._appUrl}/users/all`)
          .pipe(map((list: any[]): User[] => list.map(User.fromJSON)));
    }

    makeAdmin(userId : string, admin: boolean) {
      console.log("uid" + userId);
      return this.http
      .put(`${this._appUrl}/users/admin/${userId}`, {adminA: admin});
    }
}
