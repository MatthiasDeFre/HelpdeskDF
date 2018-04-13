import { User } from "../user/user.model";

export class Question {
    private _id : String;
    private _poster : User;
    private _body : string;
    private _title : string;
    private _datePosted : Date
    constructor(poster : User, body : string, title : string, date:Date) {
        this._poster = poster;
        this._body = body;
        this._title = title;
        this._datePosted=date;
    }
    get id() : String {
        return this._id;
    }
    get poster() : User {
        return this._poster;
    }

    get title() : string {
        return this._title;
    }

    get body() : string {
        return this._body;
    }

    static fromJSON(json: any): Question {
        const question = new Question(
          new User("Iemand"),
          json.body,
          json.title,
          json.date
        );
        console.log("id" + json._id);
        question._id = json._id;
        console.log("id2: " + question._id);
        return question;
      }
    
    toJSON() {
        return {
            _id: this._id,
            body: this._body,
            title: this._title,
            date: this._datePosted
        }
    }
}