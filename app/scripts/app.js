'use strict';

/**
 * @ngdoc overview
 * @name uidevApp
 * @description
 * # uidevApp
 *
 * Main module of the application.
 */
angular
  .module('uidevApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise("/home");
    $stateProvider
          .state('home',{
            url:'/home',
            templateUrl:'views/main.html'
          })
          .state('about',{
            url:'/about',
            templateUrl:'views/about.html'
          })
    
  });
  // .config(function ($routeProvider) {
  //   $routeProvider
  //     .when('/', {
  //       templateUrl: 'views/main.html',
  //       controller: 'MainCtrl'
  //     })
  //     .when('/about', {
  //       templateUrl: 'views/about.html',
  //       controller: 'AboutCtrl'
  //     })
  //     .otherwise({
  //       redirectTo: '/'
  //     });
  // });
