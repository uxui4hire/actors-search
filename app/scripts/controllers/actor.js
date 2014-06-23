'use strict';

/**
 * @ngdoc function
 * @name angulartestApp.controller:ActorCtrl
 * @description
 * # ActorCtrl
 * Controller of the angulartestApp
 */
angular.module('angulartestApp')
  .controller('ActorCtrl', function ($scope, $routeParams, $http) {
    $scope.actorId = $routeParams.actorId;
    $scope.actorName = $routeParams.actorName;

    $scope.titles = [];

    $scope.gridOptions = {
      data: 'titles',
      columnDefs: [
        {field:'title', displayName:'Title'},
        {field:'original_title', displayName:'Original Title'},
        {field:'release_date', displayName:'Release Date'},
        {field:'character', displayName:'character'},
        {field:'adult', displayName:'Adult'}
      ],
      sortInfo: {
        fields: ['release_date'],
        directions: ['asc']
      }
    };

    var getMovies = function(actor) {
      return $http.get('http://api.themoviedb.org/3/person/' + actor + '/movie_credits', {
        params: {
          'api_key': 'cecc69d5a147e6ef0ac176b35d44f9e3'
        }
      }).then(function(res){
        $scope.titles.length = 0;
        var titles = $scope.titles;
        angular.forEach(res.data.cast, function(item){
          titles.push(item);
        });
      });
    };

    getMovies($scope.actorId);

  });
