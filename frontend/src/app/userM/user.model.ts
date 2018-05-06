export class User {
    private _name : string;
    private _id : string;
    constructor(id : string, name : string) {
        this._id =id;
        this._name = name;
        console.log("naam " + name + " id: " + id);
    }
    get id() : string {
        return this._id;
    }
    get name() : string {
        return this._name;
    }
}