angular.module('shortly.links', [])

.controller('LinksController', ['$scope', '$http', function ($scope, $http, Links) {
  // Your code here
  $scope.data = {};
  $scope.getLinks = function(){
    $http.get('/api/links').success(function(data) {
      $scope.data.links = data;
    });
  };
  $scope.getLinks();
}]);
