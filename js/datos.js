let url = "../resources/data/productos.json"

fetch(url, { mode: "no-cors" })
    .then(res => res.json())
    .then(data => {
        let cadena = "";

        for (let tipo in data) {
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

        document.getElementById("productosTienda").innerHTML = cadena
    })