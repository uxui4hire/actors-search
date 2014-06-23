'use strict';

/**
 * @ngdoc overview
 * @name angulartestApp
 * @description
 * # angulartestApp
 *
 * Main module of the application.
 */
angular
  .module('angulartestApp', [
    'ngResource',
    'ui.bootstrap',
    'ngGrid',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/actor/:actorId/:actorName', {
        templateUrl: 'views/actor.html',
        controller: 'ActorCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
