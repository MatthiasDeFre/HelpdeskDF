export class User {
    private _name : string;
    private _id : string;
    private _avatar : string;
    private _admin : boolean;
    constructor(id : string, name : string, admin : boolean) {
        this._id =id;
        this._name = name;
        this._admin = admin;
        console.log("naam " + name + " id: " + id);
    }
    get id() : string {
        return this._id;
    }
    get name() : string {
        return this._name;
    }
    get avatar() : string {
        return this._avatar;
    }
    get isAdmin() : boolean {
        return this._admin;
    }
    set admin(admin : boolean) {
        this._admin = admin;
    }
    set avatar(avatar : string)  {
        this._avatar = avatar;
    }
    static fromJSON(json: any): User {
        const user = new User(
          json._id,
          json.username,
          json.admin,

        );
        return user;
      }
}