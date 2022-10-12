const {createApp} = Vue

let url="../resources/data/usuarios.json"

fetch(url)
.then (res => res.json())
.then (data => {
    let datos = data
    createApp({
        data() {
            return {
                info: datos,
                logueado: (sessionStorage.logueado != "si")
            }
        }
    }).mount('#botones-log-reg')
})