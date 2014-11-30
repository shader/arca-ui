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
  .controller('RootCtrl', ['$scope', '$state', 'Restangular', function($scope, $state, Data) {
    $scope.user = {name: "Creator"};
    $scope.model = {};
    $scope.model.title = "Welcome";

    var oldState = '';
    $scope.$on('$stateChangeStart', function(angularEvent, toState) {
      //console.log("stateChangeStart");
      var isDownwards = true;
      if (toState) {
        var newState = toState.name;
        if (oldState !== newState && !$state.includes(newState)) {
          isDownwards = false;
        }
        
        oldState = newState;
      }
      
      $scope.isDownwards = isDownwards;
    });

    Data.all('items').getList().then(function(items){
      $scope.model.items = items;
      $scope.model.item = items[0];
    });
  }])

  .controller('MainCtrl', ['$scope', function($scope) {
  }]);
  return Controllers;
});
