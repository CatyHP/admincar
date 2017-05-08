'use strict';

/**
 * @ngdoc overview
 * @name admincarApp
 * @description
 * # admincarApp
 *
 * Main module of the application.
 */


var admincarApp = angular
  .module('admincarApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  
  .config(function ($routeProvider,$locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/registroUser.html',
        controller: 'RegistroCtrl',
        controllerAs: 'registro'
      })
      .when('/modificar', {
        templateUrl: 'views/modificaUser.html',
        controller: '',
        controllerAs: ''
      })
      .when('/modificauto', {
        templateUrl: 'views/modificaAutos.html',
        controller: '',
        controllerAs: ''
      })
       .otherwise({
        redirectTo: '/'
      });

      $locationProvider.hashPrefix('');
  });
