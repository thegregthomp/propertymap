'use strict';

angular.module('base.app.controllers', [])
    .controller('baseController', function($scope, $rootScope, $stateParams, $state) {
        console.log('BASE CONTROLLER');
    })
    .controller('tableController', function($scope, ngTableParams, $filter, dataFactory, data) {
        
        $scope.tableParams = new ngTableParams({
            page: 1, // show first page
            count: 10, // count per page
            sorting: {
                place: 'asc' // initial sorting
            }
        }, {
            total: data.length, // length of data
            getData: function($defer, params) {
                // use build-in angular filter
                var orderedData = params.sorting() ?
                    $filter('orderBy')(data, params.orderBy()) :
                    data;

                $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
            }
        });
    });