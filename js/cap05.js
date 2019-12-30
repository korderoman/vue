/*
propiedades computadas, son cacheadas es decir almacenadas en el cache y que permiten 
reducir el tiempo de computo

*/

const app=new Vue({
    el:"#app",
    data:{
       mensaje:"Hola Mundo",
       contador:0
    },
    methods:{
        
    },
    computed:{
        invertido(){
            //computed recibe datos que tienen logica, propiedades procesadas
            return this.mensaje.split("").reverse().join("");
        },
        color(){
            return {
                "bg-success":this.contador<=10,
                "bg-warning":this.contador>10 && this.contador<20,
                "bg-danger":this.contador>=20
            }
        }
    }

})