import './assets/css/style.css';

const x = document.getElementById("loginForm");
const y = document.getElementById("registerForm");
const z = document.getElementById("btnBackdrop");
const btnLogin = document.getElementById("loginBtn");
const btnRegister = document.getElementById("registerBtn");

btnRegister.addEventListener("click", () => {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "100px";
  }
);

btnLogin.addEventListener("click", () => {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
  }
);