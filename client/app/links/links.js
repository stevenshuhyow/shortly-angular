angular.module('shortly.links', [])

.controller('LinksController', ['$scope', 'Links', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  $scope.getLinks = function(){
    Links.retrieveLinks().then(function(data) {
      $scope.data.links = data;
    });
  };
  $scope.getLinks();
  $scope.redirect = function(baseUrl, code){
    window.location = baseUrl + '/' + code;
  };
}]);
