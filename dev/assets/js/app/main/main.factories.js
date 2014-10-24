'use strict';

angular.module('base.app.factories', [])

.factory("dataFactory", function(Restangular) {
  return {
    getData: function() {
      console.log('IT');
      return Restangular.oneUrl('data').get();
    },
  }
});