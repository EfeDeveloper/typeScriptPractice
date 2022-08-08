System.register(["./createToast.js", "./loggedIn.js"], function (exports_1, context_1) {
    "use strict";
    var createToast_js_1, loggedIn_js_1;
    var __moduleName = context_1 && context_1.id;
    function default_1(dbUser, userFormData) {
        if (dbUser.userName === userFormData.userName &&
            dbUser.password === userFormData.password) {
            localStorage.setItem('userName', userFormData.userName);
            loggedIn_js_1.default();
            createToast_js_1.createToast('Inicio de sesión satisfactorio', 'success');
            return;
        }
        createToast_js_1.createToast('Error al iniciar sesión', 'error');
        return;
    }
    exports_1("default", default_1);
    return {
        setters: [
            function (createToast_js_1_1) {
                createToast_js_1 = createToast_js_1_1;
            },
            function (loggedIn_js_1_1) {
                loggedIn_js_1 = loggedIn_js_1_1;
            }
        ],
        execute: function () {
        }
    };
});
