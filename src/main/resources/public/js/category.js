angular.module('demo', [])
    .controller('CategoryController', function($scope, $http,$window) {


        $scope.keyword = "";
        $http.get('http://localhost:8080/item_summary?keyword='+ $scope.keyword).
        then(function(response) {
            $scope.result = response.data;
        });

        $scope.searchItem = function() {
            loadItems();
        }

        function loadItems() {
            $http.get('http://localhost:8080/item_summary?keyword='+ $scope.keyword ).
            then(function(response) {
                $scope.result = response.data;
            });
        }

        function goToDetail(itemId){
            $window.location.href = '/productDetail.html?itemId'+itemId;
        }
    });