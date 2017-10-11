var app = angular.module('demo', [])
    .controller('ItemDetailController', ['$scope','$http','$location', function($scope, $http,$location ) {

        $scope.itemId = $location.$$absUrl.split('itemId=')[1];

        $http.get('http://localhost:8080/item_detail?itemId='+ $scope.itemId).
        then(function(response) {
            $scope.item = response.data;
        });

    }]);
