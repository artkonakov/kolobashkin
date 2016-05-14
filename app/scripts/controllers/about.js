'use strict';

/**
 * @ngdoc function
 * @name kolobashkinApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the kolobashkinApp
 */
angular.module('kolobashkinApp')
  .controller("AboutCtrl", ['$scope', 'getItems', function($scope, getItems) {

    //Делаем запрос к серверу через фабрику
    getItems.getUrl('/items.json').success(function(response) {
      $scope.items = response;
      console.log($scope.items);
    });

  }]);
