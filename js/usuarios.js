let urlUsuarios = "https://raw.githubusercontent.com/jmcastex/nerdilon/master/resources/data/usuarios.json"

function registro(){
    alert("Ja. Eso no Anda")
    document.getElementById("reset").click()
}

function iniciaSesion(){
    let form = {
        "email": document.getElementById("email-log"),
        "contraseña": document.getElementById("password-log")
    }
    fetch(urlUsuarios)
    .then(response => response.json())
    .then(data => {
        if (data.email === form.email.value && data.contraseña === form.contraseña.value){
            sessionStorage.logueado = "si"
            form.contraseña.value=""
            form.email.value=""
            document.getElementById("btn-cerrar-log").click();
            sesionActiva()
            location.reload()
        }else{
            alert("Email o Contraseña Incorrecto!")
        }
    })
}