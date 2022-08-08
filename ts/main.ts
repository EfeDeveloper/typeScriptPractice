import { getUsers } from './users.js';
import login from './login.js';
import loggedIn from './loggedIn.js';

let dbUsers = getUsers()[0];

//validate user session

loggedIn()

document.getElementById('loginButton')!.addEventListener('click', (e) => {
  e.preventDefault();

  let userName: string = (<HTMLInputElement>document.getElementById('userName')).value;

  let password: string = (<HTMLInputElement>document.getElementById('password')).value;

  let userFormData = { userName, password };

  login(dbUsers, userFormData);
});
