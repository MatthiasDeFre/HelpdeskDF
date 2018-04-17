export class Answer {
    
    private _id : String;
    private _datePosted : Date
    constructor(private _body : String) {}

    get id() : String {
        return this._id;
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
        console.log(json);
        const answer = new Answer(
          json.body
        
        );
        console.log("JSONBODY" +json.posted);
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