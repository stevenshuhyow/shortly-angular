angular.module('shortly.links', [])

.controller('LinksController', ['$scope', '$http', 'Links', function ($scope, $http, Links) {
  // Your code here
  $scope.data = {};
  $scope.getLinks = function(){
    $http.get('/api/links').success(function(data) {
      $scope.data.links = data;
    });
  };
  $scope.getLinks();
  $scope.redirect = function(baseUrl, code){
    console.log('about to redirect');
    window.location = baseUrl + '/' + code;
  };
}]);
