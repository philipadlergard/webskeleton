angular.module('app').controller('mainController', ['$scope', '$http', function ($scope, $http) {
    
    function post(header, url, text) {
        this.header = header;
        this.url = url;
        this.text = text;
    }
    
    $scope.posts = [];
    
    $scope.posts.push(new post('Bästa sökmotorn', 'http://www.google.se', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation'));
    
    $scope.posts .push(new post('Post2', 'www.example.se', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'));
    
    $scope.posts.push(new post('Post3', 'www.example.se', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad         minim veniam, quis nostrud exercitation ullamco laboris nis.'));
}])