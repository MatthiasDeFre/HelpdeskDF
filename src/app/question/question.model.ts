import { User } from "../user/user.model";

export class Question {
    private _poster : User;
    private _body : string;
    private _title : string;

    constructor(poster : User, body : string, title : string) {
        this._poster = poster;
        this._body = body;
        this._title = title;
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
}