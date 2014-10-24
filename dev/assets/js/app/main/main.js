'use strict';

var baseApp = angular.module('baseApp', [
    'restangular',
    'ui.router',
    'ngTable',
    'base.app.controllers',
    'base.app.factories'
  ])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider, RestangularProvider) {

    RestangularProvider.setRequestSuffix('.json');
    RestangularProvider.setBaseUrl('/assets/api/');

    var templates = '/assets/js/app/main/views/';
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
    $urlRouterProvider.when('', '/').otherwise('/');
    $stateProvider
      .state('base', {
        url: "/",
        abstract: true,
        controller: 'baseController',
        templateUrl: templates + "index.html",
        resolve: {
          data: function($state, dataFactory) {
            console.log('AAA');
            return dataFactory.getData()
              .then(function(data) {
                return data;
              }, function(error) {
                console.log(error);
                return error;
              })
          }
        }
      })
      .state('base.table', {
        url: "",
        controller: 'tableController',
        templateUrl: templates + "table.html",
      })
  });