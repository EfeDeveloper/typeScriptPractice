type types = 'info' | 'success' | 'error' | 'warning';

const toast = document.getElementById('toasts');

export function createToast(message: string = '', notificationType: types = 'info') {
  let properties: any;

  const notif = document.createElement('div');
  const notifIcon = document.createElement('span');

  properties = setProperties(notificationType);

  notif.classList.add('toast');
  notif.classList.add(notificationType);

  notifIcon.classList.add(properties[0]);
  notifIcon.classList.add(properties[1]);

  notif.innerText = message;

  toast!.appendChild(notif);
  notif.append(notifIcon);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}

function setProperties(notificationType: string) {
  let propertyList: any;

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
