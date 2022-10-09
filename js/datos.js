let url = "../resources/data/productos.json"

let filtros = {
    tazas: document.getElementById("tazas"),
    remeras: document.getElementById("remeras"),
    llaveros: document.getElementById("llaveros"),
    muniecos: document.getElementById("muniecos"),
    mousepads: document.getElementById("mousepads"),
}


function pintarDatos(){
    fetch(url, { mode: "no-cors" })
        .then(res => res.json())
        .then(data => {
            let cadena = "";
    
            for (let tipo in data) {
                if (!filtros[tipo].checked){
                //    continue;
                }else{
                    for (let prod of data[tipo]) {
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
    
            document.getElementById("productosTienda").innerHTML = cadena
        })
}

