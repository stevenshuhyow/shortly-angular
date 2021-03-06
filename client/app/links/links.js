angular.module('shortly.links', [])

.controller('LinksController', ['$scope', 'Links', 'Auth', function ($scope, Links, Auth) {
  // Your code here
  $scope.data = {};
  $scope.getLinks = function(){
    Links.retrieveLinks().then(function(data) {
      $scope.data.links = data;
    });
  };
  $scope.getLinks();

  $scope.signout = function(){
    Auth.signout();
  };

}]);
