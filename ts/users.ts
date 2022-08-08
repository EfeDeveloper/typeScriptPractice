export class User {
  constructor(private _userName: string, private _password: string) {}
  get userName(): string {
    return this._userName;
  }
  set userName(userName) {
    this._userName = userName;
  }
  get password(): string {
    return this._password;
  }
  set password(password) {
    this._password = password;
  }
}

let users: User[] = [];

let userOne = new User("EdFerVilla", "sinPass");
users.push(userOne);

export function getUsers() {
    return users
}