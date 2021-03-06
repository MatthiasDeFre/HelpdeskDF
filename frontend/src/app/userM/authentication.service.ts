import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from './user.model';

function parseJwt(token) {
  if (!token) {
    return null;
  }
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  return JSON.parse(window.atob(base64));
}

@Injectable()
export class AuthenticationService {
  private readonly _tokenKey = 'currentUser';
  private readonly _url = '/API/users';
  private _user$: BehaviorSubject<User>;
  private _username$ : BehaviorSubject<String>;
  public redirectUrl: string;

  constructor(private http: HttpClient) {
    let parsedToken = parseJwt(localStorage.getItem(this._tokenKey));
    if (parsedToken) {
      const expires =
        new Date(parseInt(parsedToken.exp, 10) * 1000) < new Date();
      if (expires) {
        localStorage.removeItem(this._tokenKey);
        parsedToken = null;
      }
    }
    this._user$ = new BehaviorSubject<User>(
      parsedToken && new User(parsedToken._id, parsedToken.username, parsedToken.admin)
    );
    this._username$ = new BehaviorSubject<String>(
      parsedToken && parsedToken.username
    );
  }

  get user$(): BehaviorSubject<User> {
    return this._user$;
  }
  get username$() : BehaviorSubject<String> {
    return this._username$;
  }
  get token(): string {
    const localToken = localStorage.getItem(this._tokenKey);
    return !!localToken ? localToken : '';
  }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post(`${this._url}/login`, { username, password }).pipe(
      map((res: any) => {
        const token = res.token;
        if (token) {
          console.log("result " + res.id);
          console.log("token" + res.token);
          localStorage.setItem(this._tokenKey, token);
          this._user$.next(new User(res.id, username, res.admin));
          this._username$.next(username);
          return true;
        } else {
          return false;
        }
      })
    );
  }

  logout() {
    if (this.user$.getValue()) {
      localStorage.removeItem(this._tokenKey);
      setTimeout(() => {
        this._user$.next(null);
        this._username$.next(null);
      });
    }
  }

  register(username: string, password: string, avatar : string): Observable<boolean> {
    return this.http.post(`${this._url}/register`, { username, password, avatar }).pipe(
      map((res: any) => {
        const token = res.token;
        if (token) {
          localStorage.setItem(this._tokenKey, token);
          this._user$.next(new User(res.id, username, res.admin));
          this._username$.next(username);
          return true;
        } else {
          return false;
        }
      })
    );
  }

  checkUserNameAvailability(username: string): Observable<boolean> {
    return this.http.post(`${this._url}/checkusername`, { username }).pipe(
      map((item: any) => {
        if (item.username === 'alreadyexists') {
          return false;
        } else {
          return true;
        }
      })
    );
  }
  uploadFile(image) : Observable<string> {
    return this.http.post(`${this._url}/upload`, image).pipe(
      map((item: any) => {
        console.log(item);
        return item.fileName;
      })
    );
  }
}
