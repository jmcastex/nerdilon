createApp({
    data() {
        return {
            info: {},
            filtrados: [],
            cargando: true,
            urlData: "https://raw.githubusercontent.com/jmcastex/nerdilon/master/resources/data/productos.json",
            filtros:["tazas", "remeras", "llaveros", "mousepads", "muniecos"],
        }
    },
    created() {
        this.leerDatos(this.urlData)
    },
    methods: {
        construccion(){
            alert("Seccion en Reparacion. Disculpe las molestias!")
        },
        leerDatos(url) {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    this.info = data
                    this.filtro()
                })
        },
        filtro(){
            this.filtrados=[]
            if (this.filtros.includes("tazas")) this.filtrados = this.filtrados.concat(this.info.tazas)
            if (this.filtros.includes("remeras")) this.filtrados = this.filtrados.concat(this.info.remeras)
            if (this.filtros.includes("llaveros")) this.filtrados = this.filtrados.concat(this.info.llaveros)
            if (this.filtros.includes("mousepads")) this.filtrados = this.filtrados.concat(this.info.mousepads)
            if (this.filtros.includes("muniecos")) this.filtrados = this.filtrados.concat(this.info.muniecos)
        }
    }
}).mount('#productosTienda')