'use strict';

/**
 * @ngdoc function
 * @name kolobashkinApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the kolobashkinApp
 */
angular.module('kolobashkinApp')
  .controller("AboutCtrl", ['$scope', 'getItems', '$routeParams', function($scope, getItems, $routeParams) {

    //Делаем запрос к серверу через фабрику
    $scope.aboutItem = $routeParams.item;
    getItems.getUrl('/items.json').success(function(response) {
      $scope.items = response;
      console.log($scope.items);
    });

  }]);
