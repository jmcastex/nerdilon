createApp({
    data() {
        return {
            info: {},
            cargando: true,
            urlData: "https://raw.githubusercontent.com/jmcastex/nerdilon/master/resources/data/productos.json",
            filtros:["tazas", "remeras", "llaveros", "mousepads", "muniecos"],
        }
    },
    created() {
        this.leerDatos(this.urlData)
    },
    methods: {
        leerDatos(url) {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    this.info = data
                })
        },
    }
}).mount('#productosTienda')