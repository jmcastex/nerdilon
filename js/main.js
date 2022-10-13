var button = document.querySelector('.header__button');
var nav = document.querySelector('.header__nav');
var btnLogin = document.getElementById("#login");
var btnRegister = document.getElementById("#register");
var frmLogin = document.querySelector(".form");
var btnTema = document.querySelector("#tema");
var cuerpo = document.querySelector("body");
let closeForm = document.querySelectorAll(".closeForm");
let irAlLogin = document.querySelector(".irAlLogin");

button.addEventListener('click', function () {
    nav.classList.toggle('header__nav--activo');
});

function login() {
    frmLogin.classList.toggle("login");
};

function register() {
    frmLogin.classList.toggle("register");
};

closeForm[0].addEventListener("click", function () {
    frmLogin.classList.toggle("register");
});

closeForm[1].addEventListener("click", function () {
    frmLogin.classList.toggle("login");
});

irAlLogin.addEventListener("click",function () {
    frmLogin.classList.toggle("register");
    frmLogin.classList.toggle("login");
});

function cambiarModo() {
    var oscuro = cuerpo.classList.toggle("dark");
    localStorage.setItem("oscuro", oscuro);
}

btnTema.addEventListener("click", function () {
    cambiarModo();
})

document.addEventListener("DOMContentLoaded", function () {
    sesionActiva()
    if (localStorage.getItem("oscuro")=="true") {
        cambiarModo();
    }
});