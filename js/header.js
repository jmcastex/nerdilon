const {createApp} = Vue

let url="https://raw.githubusercontent.com/jmcastex/nerdilon/master/resources/data/usuarios.json"

function sesionActiva(){
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
}