define(['angular',
        'jquery',
        'lodash',
        'bluebird',
        'ng-bootstrap',
        'ng-grid',
        'ng-ui-utils',
        'restangular',
        'LocalStorageModule',
        'services'], function (ng, $, _, Promise) {
  /* Controllers */

  _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;

  var Controllers = ng.module('arcaControllers',
                              ['ui.bootstrap',
                               'ui.format',
                               'ngGrid',
                               'restangular',
                               'arcaServices'
                              ]);
  Controllers
  .controller('RootCtrl', ['$scope', 'Restangular', function($scope, Data) {
    $scope.user = {name: "Creator"};
    $scope.model = {};
    $scope.model.title = "Welcome";

    Data.all('items').getList().then(function(items){
      $scope.model.items = items;
      $scope.model.item = items[0];
    });
  }])

  .controller('MainCtrl', ['$scope', function($scope) {
  }]);
  return Controllers;
});
