System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function default_1() {
        let userName = localStorage.userName;
        if (userName) {
            //capture elements
            let navLoginButton = document.getElementById('navLoginButton');
            let navUserName = document.getElementById('navUserName');
            let addPicture = document.getElementById('addPicture');
            let closeSession = document.getElementById('closeSession');
            //not show login button
            navLoginButton.style.display = 'none';
            //show user name
            navUserName.innerHTML = `<span class="user-name">Bienvenido, ${userName}</span>`;
            //add picture button
            addPicture.innerHTML = `<div class="d-grid gap-2">
      <button type="button" class="btn btn-primary">Agregar foto</button>
    </div>`;
            //Close session button
            closeSession.innerHTML = `<div class="d-grid gap-2">
      <button type="button" class="btn btn-danger">Cerrar sesión</button>
    </div>`;
            closeSession.onclick = (e) => {
                e.preventDefault();
                localStorage.removeItem('userName');
                window.location.reload();
            };
        }
    }
    exports_1("default", default_1);
    return {
        setters: [],
        execute: function () {
        }
    };
});
