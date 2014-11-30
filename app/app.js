define(['angular',
        'bluebird',
        'services',
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

  return ng.module('seedApp', [
    'ui.router',
    'ui.bootstrap',
    'registryControllers',
    'registryServices',
    'restangular',
    'breadcrumb',
    'LocalStorageModule',
    'xeditable',
    'directives',
    'filters'
  ])

  .config(['$stateProvider','$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
          .state('main', {
            url: "",
            breadcrumb: { title: 'Home' }
          })
    }])

  .config(function(RestangularProvider) {
      // configure restangular to use the node-based 'json-server'
      RestangularProvider.setBaseUrl('http://localhost:3000/');
  });
});
