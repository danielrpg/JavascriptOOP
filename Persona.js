var Persona = (function(){
    'use strict';
    
    var paises = new Array(); // Este es el arreglo de paises
    var ciudadesBolivia = new Array();
    var ciudadesPeru = new Array();
    var ciudadesEcuador = new Array();
    
    var initCiudadesBolivia = function(){
        ciudadesBolivia[0] = 'Cochabamba';
        ciudadesBolivia[1] = 'La Paz';
        ciudadesBolivia[2] = 'Santa Cruz';
        establecerOpcionesSelect(ciudadesBolivia);
    };

    var initCiudadesPeru = function(){
        ciudadesPeru[0] = 'Lima';
        ciudadesPeru[1] = 'Arequipa';
        ciudadesPeru[2] = 'Cusco';
        establecerOpcionesSelect(ciudadesPeru);
    };

    var initCiudadesEcuador = function(){
        ciudadesEcuador[0] = 'Quito';
        ciudadesEcuador[1] = 'Guayaquil';
        ciudadesEcuador[2] = 'Cuenca';
        establecerOpcionesSelect(ciudadesEcuador);
    };
    /**
     * Metodo que establece las ciudades de acuerdo al pais seleccionado
     */
    var establecerOpcionesSelect = function(ciudades){
        var select = document.getElementById('ciudad');
        select.innerHTML = "";
        for(var i = 0 ; i < paises.length ; i++){
            var opt = document.createElement('option');
            opt.value = ciudades[i];
            opt.innerHTML = ciudades[i];
            select.appendChild(opt);
        } 
    };

    /**
     * Este metodo inicializa el select 
     */
    var inicializarPaises = function(){
         paises[0] = 'Bolivia';
         paises[1] = 'Peru';
         paises[2] = 'Ecuador';
         var select = document.getElementById('pais');
         for(var i = 0 ; i < paises.length ; i++){
             var opt = document.createElement('option');
             opt.value = paises[i];
             opt.innerHTML = paises[i];
             select.appendChild(opt);
         }   
    };

    /**
     * Este es el metodo cuando se selecciona un elemento
     */
    var paisSeleccionado = function(){
        var pais = document.getElementById('pais').value;
        inicializarCiudades(pais);
    }; 
    /**
     * Metodo que inicializa los paises
     */
    var inicializarCiudades = function(pais){
        if(pais === 'Bolivia'){
            initCiudadesBolivia();
        }else if(pais === 'Peru'){
            initCiudadesPeru();
        }else if(pais === 'Ecuador'){
            initCiudadesEcuador();
        }
    };

    return { 
        paisSeleccionado :paisSeleccionado,
        initPaises : inicializarPaises 
    }
})();


