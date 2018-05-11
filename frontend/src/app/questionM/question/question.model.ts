import { User } from "../../userM/user.model";
import { Router } from "@angular/router";
import { Answer } from "../answer/answer.model";

export class Question {
    private _id : String;
    private _poster : User;
    private _body : string;
    private _title : string;
    private _datePosted : Date;
    private _answers : Answer[];
    
    constructor(body : string, title : string, date:Date) {
        this._body = body;
        this._title = title;
        this._datePosted=date;
        this._answers = new Array();
        console.log(body);
    }
    get id() : String {
        console.log("model " + this._id);
        return this._id;
    }
    set id(id : String) {
        this._id = id;
    }
    get poster() : User {
        return this._poster;
    }
    set poster(poster : User) {
        this._poster = poster;
    }
    get title() : string {
        return this._title;
    }

    get body() : string {
        return this._body;
    }
    set body(body : string)  {
        this._body = body;
    }
    get answers() : Answer[] {
        return this._answers;
    }
    get answerAmount() : number {
        return this._answers.length;
    }
    addAnswer(answer : Answer) {
        this._answers.push(answer);
    }
    removeAnswer(answer : Answer) {
        console.log("splicing and dicing");
        let index = -1;
        let counter = 0;
        this._answers.forEach((answerA) => {
            if(answerA.id == answer.id)
                index =counter;
            counter++;
        });
        console.log("index" + index);
        if (index > -1) {
           this._answers.splice(index, 1);
        }
    }
    static fromJSON(json: any): Question {
        const question = new Question(
          json.body,
          json.title,
          json.date,

        );
     
        question._id = json._id;
        question.poster = new User(json.poster._id, json.poster.username, json.poster.admin);
        question._answers =   json.answers.map(Answer.fromJSON);
        console.log("id " +question._id);
        return question;
      }
    
    toJSON() {
   
        return {
            _id: this._id,
            body: this._body,
            title: this._title,
            date: this._datePosted,
            answers: this._answers.map(i => i.toJSON())
        }
    }
}