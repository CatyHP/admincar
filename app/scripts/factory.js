'use strict';




admincarApp.factory('usuariosFactory', function($http) {
   var factory = [{ "id":"1","nombre":"Juan", "apellidoP":"Ruiz", "apellidoM":"Ruiz","fechaNac":"08/08/90",
    "autos":[{"marca":"bmw","modelo":"Bocho","anio":"1955","color":"azul"},
             {"marca":"bmw","modelo":"Beatle","anio":"2000","color":"negro"},
             {"marca":"bmw","modelo":"Mustang","anio":"1965","color":"rojo"}]},
 { "id":"2","nombre":"Ana", "apellidoP":"Barca", "apellidoM":"Solis","fechaNac":"09/09/80",
    "autos":[{"marca":"bmw","modelo":"Bocho","anio":"1955","color":"azul"},
             {"marca":"bmw","modelo":"Beatle","anio":"2000","color":"negro"},
             {"marca":"bmw","modelo":"Mustang","anio":"1965","color":"rojo"}]},
 {"id":"3", "nombre":"Mario", "apellidoP":"Segura", "apellidoM":"Hurtado","fechaNac":"05/08/85",
    "autos":[{"marca":"bmw","modelo":"Bocho","anio":"1955","color":"azul"},
             {"marca":"bmw","modelo":"Beatle","anio":"2000","color":"negro"},
             {"marca":"bmw","modelo":"Mustang","anio":"1965","color":"rojo"}] },
 { "id":"4","nombre":"Ernesto", "apellidoP":"Cocoletzi", "apellidoM":"Guerra","fechaNac":"01/03/80",
    "autos":[{"marca":"bmw","modelo":"Bocho","anio":"1955","color":"azul"},
             {"marca":"bmw","modelo":"Beatle","anio":"2000","color":"negro"},
             {"marca":"bmw","modelo":"Mustang","anio":"1965","color":"rojo"}] }];

 /* factory.getItems = function () {
    return  $http.get('../scripts/jsonInfo.json');  
   };*/
 

   return factory;
    
});

