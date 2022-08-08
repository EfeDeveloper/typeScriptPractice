System.register(["./users.js", "./login.js", "./loggedIn.js"], function (exports_1, context_1) {
    "use strict";
    var users_js_1, login_js_1, loggedIn_js_1, dbUsers;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (users_js_1_1) {
                users_js_1 = users_js_1_1;
            },
            function (login_js_1_1) {
                login_js_1 = login_js_1_1;
            },
            function (loggedIn_js_1_1) {
                loggedIn_js_1 = loggedIn_js_1_1;
            }
        ],
        execute: function () {
            dbUsers = users_js_1.getUsers()[0];
            //validate user session
            loggedIn_js_1.default();
            document.getElementById('loginButton').addEventListener('click', (e) => {
                e.preventDefault();
                let userName = document.getElementById('userName').value;
                let password = document.getElementById('password').value;
                let userFormData = { userName, password };
                login_js_1.default(dbUsers, userFormData);
            });
        }
    };
});
