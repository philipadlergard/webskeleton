angular.module('app').controller('addpostController', ['$scope', '$http', function ($scope, $http) {
    
    $scope.submit = function (isValid) {
        
        if (!isValid) {
            
            $scope.submitted = true;
            return;
        }
        
        //send to database
    }
}])