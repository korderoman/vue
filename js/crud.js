const app=new Vue({
    el:"#app",
    data:{
        titulo:"GYM con VUE",
        tareas:[],
        nuevaTarea:''
    },
    methods:{
        agregarTarea(){
            this.tareas.push({nombre:this.nuevaTarea,estado:false})
            this.nuevaTarea="";
            //¿Qué es el localStorage?
            localStorage.setItem("gym-vue",JSON.stringify(this.tareas))
        },
        editarTarea(index){
                this.tareas[index].estado=!this.tareas[index].estado
        },
        eliminarTarea(index){
            this.tareas.splice(index,1);
            localStorage.setItem("gym-vue",JSON.stringify(this.tareas))
        }
    },
    created:function(){
        //funcion que se ejecuta cuandose carga nuestra aplicacion
        let datosDB=JSON.parse(localStorage.getItem("gym-vue"));
        if(datosDB==null){
            this.tareas=[];
        }else{
            this.tareas=datosDB
        }
        console.log(datosDB)
    }
})