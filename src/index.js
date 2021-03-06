import { registerUser, loginUser } from './services/apiRequests';
import './assets/css/style.css';

const loginForm = document.getElementById('loginForm');
const inputLoginUsername = document.getElementById('userNameLogin');
const registerForm = document.getElementById('registerForm');
const inputRegisterUsername = document.getElementById('userNameRegister');
const btnBackdrop = document.getElementById('btnBackdrop');
const btnLogin = document.getElementById('loginBtn');
const btnRegister = document.getElementById('registerBtn');
const errorsDiv = document.querySelector('.errorsDiv');

btnRegister.addEventListener('click', () => {
  loginForm.style.left = '-400px';
  registerForm.style.left = '50px';
  btnBackdrop.style.left = '100px';
});

btnLogin.addEventListener('click', () => {
  loginForm.style.left = '50px';
  registerForm.style.left = '450px';
  btnBackdrop.style.left = '0';
});

// localStorage.removeItem('ChromieUserID');
// Auto log user in if session still exists
const userID = localStorage.getItem('ChromieUserID');
if (userID) window.location.href = './dashboard.html';

// login form onSubmit Event listener
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const result = await loginUser(inputLoginUsername.value);
  if (result.status === 200) {
    errorsDiv.textContent = '';
    // eslint-disable-next-line no-underscore-dangle
    localStorage.setItem('ChromieUserID', result.data._id);
    window.location.href = './dashboard.html';
    // sessionStorage.getItem('ChromieUserID');
  } else errorsDiv.textContent = result.data || result.statusText;
});

// registration form onSubmit Event listener
registerForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const result = await registerUser(inputRegisterUsername.value);
  if (result.status === 200) {
    errorsDiv.textContent = '';
    // eslint-disable-next-line no-underscore-dangle
    localStorage.setItem('ChromieUserID', result.data._id);
    window.location.href = './dashboard.html';
    // sessionStorage.getItem('ChromieUserID');
  } else errorsDiv.textContent = result.data || result.statusText;
});