angular.module('awfApp', [
    'ngRoute'
])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider.
            when('/shows', {
                templateUrl: 'partials/shows.html'
            }).
            when('/bio', {
                templateUrl: 'partials/bio.html'
            }).
            when('/lyrics', {
                templateUrl: 'partials/lyrics.html'
            }).
            when('/albums', {
                templateUrl: 'partials/albums.html'
            }).
            when('/contact', {
                templateUrl: 'partials/contact.html'
            }).
            otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
    }]);
