define(['angular',
        'bluebird',
        'services',
        'ng-animate',
        'ng-route',
        'controllers',
        'ng-bootstrap',
        'ng-ui-utils',
        'ng-ui-router',
        'ng-xeditable',
        'directives',
        'filters',
        'lib/breadcrumb'
       ], function (ng) {
  /* App Module */

  return ng.module('arcaApp', [
    'ui.router',
    'ui.bootstrap',
    'arcaControllers',
    'arcaServices',
    'restangular',
    'breadcrumb',
    'LocalStorageModule',
    'xeditable',
    'directives',
    'filters',
    'ngAnimate'
  ])

  .config(['$stateProvider','$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        var delay = {
            delay: function($q, $timeout) {
                var delay = $q.defer();
                $timeout(delay.resolve, 0, false);
                return delay.promise;
            }
        };

        $urlRouterProvider.otherwise('/');
        $stateProvider
          .state('main', {
            url: "/",
            templateUrl: 'partials/welcome.html',
            resolve: delay
          })
          .state('test1', {
            url: "/test1",
            templateUrl: 'partials/test1.html',
            resolve: delay
          })
          .state('test2', {
            url: "/test2",
            templateUrl: 'partials/test2.html',
            resolve: delay
          })
    }])

  .config(function(RestangularProvider) {
      // configure restangular to use the node-based 'json-server'
      RestangularProvider.setBaseUrl('http://localhost:3000/');
  });
});
