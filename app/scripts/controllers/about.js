'use strict';

/**
 * @ngdoc function
 * @name uidevApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the uidevApp
 */
angular.module('uidevApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
