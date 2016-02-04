var app = angular.module('app', ['ngRoute']);

app.controller('globalController', ['$scope', '$location', function ($scope, $location) {
    
    $scope.isCurrentPage = function (path) {
        if ($location.path() === path) {
            return 'currentNav';
        }
         else {
            return '';
        }
    }
}]);

app.config(function ($routeProvider) {
    
    $routeProvider
        .when('/', {
            templateUrl: 'pages/main.html',
            controller: 'mainController'
        })
        .when('/addpost', {
            templateUrl: 'pages/addpost.html',
            controller: 'addpostController'
    });
});

