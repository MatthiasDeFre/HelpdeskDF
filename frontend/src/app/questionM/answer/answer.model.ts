import { User } from "../../userM/user.model";
import { QuestionService } from "../question.service";

export class Answer {
    
    private _id : String;
    private _poster : User;
    private _datePosted : Date
    constructor(private _body : String) {}

    get id() : String {
        return this._id;
    }
    get poster() : User {
        return this._poster;
    }
    set poster(poster : User) {
        this._poster = poster;
    } 
    set id(id : String) {
        this._id = id;
    }
    get body() : String {
        return this._body;
    }

    get datePosted() : Date {
        return this._datePosted;
    }
   
    static fromJSON(json: any): Answer {
       
        const answer = new Answer(
          json.body
        );
        console.log("poster " + json.poster);
        if(json.poster) {
            answer.poster = new User(json.poster._id, json.poster.username, json.poster.admin);
            answer.poster.avatar = json.poster.avatar;
            console.log(json.poster.id, json.poster.username);
        }
        console.log(json);
        answer._id = json._id;
        answer._datePosted = json.posted;
     
        return answer;
      }
    
    toJSON() {
        return {
            _id: this._id,    
            body: this._body,
            posted: this._datePosted,
           
        }
    }
}