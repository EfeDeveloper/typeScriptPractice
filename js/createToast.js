System.register([], function (exports_1, context_1) {
    "use strict";
    var toast;
    var __moduleName = context_1 && context_1.id;
    function createToast(message = '', notificationType = 'info') {
        let properties;
        const notif = document.createElement('div');
        const notifIcon = document.createElement('span');
        properties = setProperties(notificationType);
        notif.classList.add('toast');
        notif.classList.add(notificationType);
        notifIcon.classList.add(properties[0]);
        notifIcon.classList.add(properties[1]);
        notif.innerText = message;
        toast.appendChild(notif);
        notif.append(notifIcon);
        setTimeout(() => {
            notif.remove();
        }, 3000);
    }
    exports_1("createToast", createToast);
    function setProperties(notificationType) {
        let propertyList;
        switch (notificationType) {
            case 'info':
                propertyList = ['bi', 'bi-info-circle', 0];
                break;
            case 'error':
                propertyList = ['bi', 'bi-x-circle-fill', 1];
                break;
            case 'success':
                propertyList = ['bi', 'bi-check-circle', 2];
                break;
            case 'warning':
                propertyList = ['bi', 'bi-exclamation-triangle', 3];
                break;
        }
        return propertyList;
    }
    return {
        setters: [],
        execute: function () {
            toast = document.getElementById('toasts');
        }
    };
});
