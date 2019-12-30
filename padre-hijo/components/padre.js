Vue.component("padre",{
    template:"<div class='p-5 bg-dark text-white'><h2>Componente Padre: {{numeroPadre}}</h2><button class='btn btn-danger' @click='numeroPadre++'>+</button>{{nombrePadre}}<hijo :numero='numeroPadre' @nombreHijo='nombrePadre=$event'></hijo></div>",
    data(){
        return {
            numeroPadre:0,
            nombrePadre:""
        }
    }
})

//Los dos : puntos aseguran que se está haciendo un vue bind
//obtener la información del hijo se hace transmitiendo un evento