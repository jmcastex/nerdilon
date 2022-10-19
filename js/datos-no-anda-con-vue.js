createApp({
    data() {
        return {
            info: {},
            filtrado:{},
            cargando: true,
            urlData: "https://raw.githubusercontent.com/jmcastex/nerdilon/master/resources/data/productos.json",
            taza: true,
            remera:true,
            llavero:true,
            mousepad:true,
            munieco:true
        }
    },
    created() {
        this.leerDatos()
    },
    methods: {
        filtro(){
            this.filtrado={}
            if (this.taza){
                this.filtrado.tazas = this.info.tazas
            }
            if (this.remera){
                this.filtrado.remeras = this.info.remeras
            }
            if (this.llavero){
                this.filtrado.llaveros = this.info.llaveros
            }
            if (this.mousepad){
                this.filtrado.mousepads = this.info.mousepads
            }
            if (this.munieco){
                this.filtrado.muniecos = this.info.muniecos
            }
        },
        leerDatos() {
            fetch(this.urlData)
                .then(res => res.json())
                .then(data => {
                    this.info = data
                    this.cargando = false
                    this.filtro()
                })
        },
        alguna() {
            return this.taza || this.remera || this.llavero || this.munieco || this.mousepad;
        }
    }
}).mount('#productosTienda')