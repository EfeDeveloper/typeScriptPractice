import { createToast } from './createToast.js';
import loggedIn from './loggedIn.js';
import { User } from './users.js';

export default function (
  dbUser: User,
  userFormData: { userName: string; password: string }
) {
  if (
    dbUser.userName === userFormData.userName &&
    dbUser.password === userFormData.password
  ) {
    localStorage.setItem('userName', userFormData.userName);
    loggedIn();
    createToast('Inicio de sesión satisfactorio', 'success');

    return;
  }
  createToast('Error al iniciar sesión', 'error');
  return;
}
