'use strict';

/**
 * @ngdoc function
 * @name admincarApp.controller:RegistrotCtrl
 * @description
 * # AboutCtrl
 * Controller of the admincarApp
 */


admincarApp.controller('RegistroCtrl', function ($scope,  usuariosFactory) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.TempData=usuariosFactory;

    $scope.agregarUser = function() {
    	  $scope.TempData.push({id: $scope.TempData.length,nombre: $scope.nombre, apellidoP: $scope.apellidoP,apellidoM: $scope.apellidoM,fechaNac: $scope.fechaN, autos: [{marca:$scope.marca,modelo:$scope.modelo,anio:$scope.anio,color:$scope.color}],});
          console.log($scope.TempData);
        };  

  });

