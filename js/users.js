System.register([], function (exports_1, context_1) {
    "use strict";
    var User, users, userOne;
    var __moduleName = context_1 && context_1.id;
    function getUsers() {
        return users;
    }
    exports_1("getUsers", getUsers);
    return {
        setters: [],
        execute: function () {
            User = class User {
                constructor(_userName, _password) {
                    this._userName = _userName;
                    this._password = _password;
                }
                get userName() {
                    return this._userName;
                }
                set userName(userName) {
                    this._userName = userName;
                }
                get password() {
                    return this._password;
                }
                set password(password) {
                    this._password = password;
                }
            };
            exports_1("User", User);
            users = [];
            userOne = new User("EdFerVilla", "sinPass");
            users.push(userOne);
        }
    };
});
