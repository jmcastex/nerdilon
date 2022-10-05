var button = document.querySelector('.header__button');
var nav = document.querySelector('.header__nav');
var btnLogin = document.querySelector("#login");
var btnRegister = document.querySelector("#register");
var frmLogin = document.querySelector(".form");
var btnTema = document.querySelector("#tema");
var cuerpo = document.querySelector("body");
let closeForm = document.querySelector(".closeForm");

button.addEventListener('click', function () {
    nav.classList.toggle('header__nav--activo');
});

btnLogin.addEventListener("click", function () {
    frmLogin.classList.toggle("login");
    console.log(frmLogin.children[0].hidden)
    if(!frmLogin.children[1].hidden){
        frmLogin.hidden = false;
        frmLogin.children[0].hidden = true;
        frmLogin.children[1].hidden = false;
    }//no estaria sabiendo porque no se esconde el form de registro
    console.log(window)
});

btnRegister.addEventListener("click", function () {
    frmLogin.classList.toggle("register");
    if(frmLogin.hidden){
        frmLogin.hidden = false;
    }
});

closeForm.addEventListener("click", function () {
    console.log(window);
    if(!frmLogin.hidden){
        frmLogin.hidden = true;
    }
});

function cambiarModo() {
    var oscuro = cuerpo.classList.toggle("dark");
    localStorage.setItem("oscuro", oscuro);
}

btnTema.addEventListener("click", function () {
    cambiarModo();
})

document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("oscuro")=="true") {
        cambiarModo();
    }
});