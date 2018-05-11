import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../user.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AdminDataService } from '../admin-data.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-admin-overview',
  templateUrl: './admin-overview.component.html',
  styleUrls: ['./admin-overview.component.css']
})
export class AdminOverviewComponent implements OnInit {

  private readonly _appUrl = '/API';

  private _users : User[];
  constructor(private _adminService : AdminDataService, private authService: AuthenticationService ) { }

  ngOnInit() {
    this._adminService.Users.subscribe((data)=> this._users=data); 
  }
  get users() {
    console.log(this._users);
    return this._users;
  }
  get currentUserId() {
    return this.authService.user$.getValue().id;
  }
  makeAdmin(userId:  string, admin : boolean) {
    console.log("admin");
    this._adminService.makeAdmin(userId, admin).subscribe(() => {
      console.log("splicing and dicing");
      let index = -1;
      let counter = 0;
      this._users.forEach((answerA) => {
          if(answerA.id == userId)
              index =counter;
          counter++;
      });
      this._users[index].admin = admin;
    });
  }
  deleteUser() {
    console.log("exterminate");
  }

}
