let url="https://github.com/jmcastex/nerdilon/tree/master/resources/data/productos.json"

fetch(url)
    .then(res => res.json())
    .then(data => {

        let cadena = "";

        for (let prod of data){
            cadena += `
                <div class="card_tienda">
                    <img src="${prod.imagen}" alt="${prod.nombre}">
                    <h4>${prod.nombre}</h4>
                    <p>$${prod.precio}</p>
                    <a href="#">Agregar al carrito</a>
                </div>
                `
        }

        document.getElementById("productosTienda").innerHTML=cadena
    })