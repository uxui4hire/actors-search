'use strict';

/**
 * @ngdoc function
 * @name angulartestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angulartestApp
 */
angular.module('angulartestApp')
  .controller('MainCtrl', function ($scope, $http, $location) {

    $scope.selected = undefined;

    $scope.getActors = function(val) {
      return $http.get('http://api.themoviedb.org/3/search/person', {
        params: {
          'query': val,
          'search_type': 'ngram',
          'api_key': 'cecc69d5a147e6ef0ac176b35d44f9e3'
        }
      }).then(function(res){
        var addresses = [];
        angular.forEach(res.data.results, function(item){
          addresses.push(item);
        });
        return addresses;
      });
    };

    $scope.onSelect = function($item, $model, $label) {
      var actorId = $item.id;
      var actorName = $item.name;

      $location.path('/actor/' + actorId + '/' + actorName);
    }

  });
