angular.module('shortly.shorten', [])


.controller('ShortenController', ['$scope', '$location', 'Links', 'Auth', function ($scope, $location, Links, Auth) {
  $scope.link = {};
  $scope.loading = false;
  $scope.notAvailable = false;
  $scope.addLink = function(url) {
    $scope.loading = true;
    Links.createNewLink(url).then(function(){
      $scope.loading = false;
      $location.path('/links');
    }).catch(function(){
      $scope.notAvailable = true;
    });
  };

  $scope.signout = function(){
    Auth.signout();
  };
}]);
