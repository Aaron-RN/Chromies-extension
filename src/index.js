import {  } from './services/services';
import './assets/css/style.css';

const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const btnBackdrop = document.getElementById('btnBackdrop');
const btnLogin = document.getElementById('loginBtn');
const btnRegister = document.getElementById('registerBtn');

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

loginForm.addEventListener('submit', () => {

});