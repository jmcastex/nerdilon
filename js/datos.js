let urldatos = ""
urldatos = "../resources/data/productos.json"; //direccion local
urldatos = "https://raw.githubusercontent.com/jmcastex/nerdilon/master/resources/data/productos.json"

let filtros = {
    tazas: document.getElementById("tazas"),
    remeras: document.getElementById("remeras"),
    llaveros: document.getElementById("llaveros"),
    muniecos: document.getElementById("muniecos"),
    mousepads: document.getElementById("mousepads"),
    ninguna() {
        return this.tazas || this.remeras || this.llaveros || this.muniecos || this.mousepads;
    }
}

let productos = {
    datos: {},
    cargando: true,
    urlData: "https://raw.githubusercontent.com/jmcastex/nerdilon/master/resources/data/productos.json",
    leerDatos() {
        fetch(this.urlData)
            .then(res => res.json())
            .then(data => {
                this.datos=data
                this.cargando=false
                filtrar()
            })
    }
}

function filtrar(){
    let cadena = "";
    for (let tipo in productos.datos) {
        if (!filtros[tipo].checked){
        //    continue;
        }else{
            for (let prod of productos.datos[tipo]) {
                cadena += `
                <div class="card_tienda">
                <img src="${prod.imagen}" alt="${prod.nombre}">
                <h4>${prod.nombre}</h4>
                <p>$${prod.precio}</p>
                <a href="#">Agregar al carrito</a>
                </div>
                `
            }
        }
    }
    if (cadena===""){
        cadena="<h2>Seleccione una Categoria</h2>"
    }
    document.getElementById("productosTienda").innerHTML = cadena
}

function primeraCarga(){
    productos.leerDatos()
}