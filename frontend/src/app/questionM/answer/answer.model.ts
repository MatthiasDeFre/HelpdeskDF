export class Answer {
    
    private _id : String;
    constructor(private _body : String, private _datePosted : Date) {}

    get id() : String {
        return this._id;
    }
    get body() : String {
        return this._body;
    }

    get datePosted() : Date {
        return this._datePosted;
    }

    static fromJSON(json: any): Answer {
        const answer = new Answer(
          json.body,
          json.date
        );
        answer._id = json._id;
        return answer;
      }
    
    toJSON() {
        return {
            _id: this._id,
            body: this._body,
            date: this._datePosted
        }
    }
}