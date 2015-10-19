'use strict';

/**
 * @ngdoc function
 * @name uidevApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the uidevApp
 */
angular.module('uidevApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
