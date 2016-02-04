angular.module('app').controller('mainController', ['$scope', '$http', function ($scope, $http) {
    
    function post(header, body) {
        this.header = header;
        this.body = body;
    }
    
    $scope.posts = [new post('Post1', 'This is my first post')];
}])