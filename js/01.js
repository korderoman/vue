//Se instancia a vue
const app=new Vue({
    el:"#app",
    data:{
        titulo:'Hola Mundo con Vue',
        frutas:["Manzana","Pera","Plátano"],
        cosas:[
            {nombre:"Pera",cantidad:10},
            {nombre:"Manzana",cantidad:0},
            {nombre:"Plátano",cantidad:13}
        ],
        nuevaCosa:"",
        cantidad:0,
        total:0
    },
    methods:{
        agregarFrutas(){
            //video 03
            //acceder un elemento dentro de data será this.
            this.cosas.push({
                nombre:this.nuevaCosa,cantidad:this.cantidad
            })
            this.nuevaCosa=""
        }
    },
    computed:{
        sumarFrutas(){
            this.total=0;
            for(cosa of this.cosas){
                this.total+=cosa.cantidad
            }
            return this.total
        }
    }
})