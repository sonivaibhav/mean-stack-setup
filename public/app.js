var VaibhavPortfolioApp = angular.module('VaibhavPortfolioApp', ['ui.router', 'ngResource', 'ngAnimate', 'ui.bootstrap', 'ui.utils', 'MainCtrl', 'NerdCtrl', 'NerdService', 'GeekCtrl', 'GeekService']);

VaibhavPortfolioApp.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function($stateProvider, $locationProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider

        // home page
        .state('home', {
            url: '/',
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        .state('nerds', {
            url: '/nerds',
            templateUrl: 'views/nerd.html',
            controller: 'NerdController'
        })

        .state('geeks', {
            url: '/geeks',
            templateUrl: 'views/geek.html',
            controller: 'GeekController'
        });

    $locationProvider.html5Mode(true);

}]);