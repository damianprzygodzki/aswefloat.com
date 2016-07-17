angular.module('awfApp')
    .controller('ApplicationController', function ($scope, $rootScope, $window, $interval) {
        $scope.isMenuOpen = 0;
        $scope.isBackgroundOn = 1;
        $scope.isHome = 1;

        var scene = document.getElementById('scene');
        var parallax = new Parallax(scene);

        $scope.toggleMenu = function () {
            $scope.isMenuOpen = !$scope.isMenuOpen;
        };

        $scope.closeMenu = function () {
            $scope.isMenuOpen = 0;
        };

        $rootScope.$on("$routeChangeSuccess", function (ev, ne, cur) {
            var view = document.getElementsByClassName('view-container');
            if(view.length){
                view[0].scrollTop = 0;
            }

            if( ne.$$route == null){
                $scope.isHome = 1;
                return;
            }
            if ( ne.$$route.originalPath === "/"){
                $scope.isHome = 1;
            }else{
                $scope.isHome = 0;
            }
        });
    });
