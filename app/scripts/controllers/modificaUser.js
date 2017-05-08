'use strict';

/**
 * @ngdoc function
 * @name admincarApp.controller:ModificaUCtrl
 * @description
 * # ModificaUCtrl
 * Controller of the admincarApp
 */
angular.module('admincarApp')
  .controller('ModificaUCtrl', function ($scope,  usuariosFactory) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

 
   	 $scope.Users=usuariosFactory;
   	 console.log(usuariosFactory);

   	  $scope.EditUsers= function(id) {
       
   	   var jsonUsers= $scope.Users;
   	  
      for (var i = 0; i < jsonUsers.length; i++) {

        	if (jsonUsers[i].id === id) {
                jsonUsers[i].nombre = angular.element('#nombre'+id).val();
                jsonUsers[i].apellidoP = angular.element('#apellidoP'+id).val(); 
                jsonUsers[i].apellidoM = angular.element('#apellidoM'+id).val(); 
                jsonUsers[i].fechaNac =  angular.element('#fechaNac'+id).val(); 
            }

       }

       console.log(usuariosFactory);

        };  
     
     $scope.EditAutos= function(id) {
       
   	   var jsonUsers= $scope.Users;
   	  
    	console.log( $("#nombre1").val());
      for (var i = 0; i < jsonUsers.length; i++) {

        	if (jsonUsers[i].id === id) {
        		var marcaN=angular.element('#marca'+id).val();
        		var modeloN=angular.element('#marca'+id).val();;
        		var anioN=angular.element('#marca'+id).val();;
        		var colorN =angular.element('#marca'+id).val();;

                jsonUsers[i].autos.push( {marca:marcaN,modelo:modeloN,anio:anioN,color:colorN});
            }

       }
       
       console.log(usuariosFactory);

        };  

  });
