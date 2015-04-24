angular.module('shortly.shorten', [])

.controller('ShortenController', ['$scope', '$location', 'Links', function ($scope, $location, Links) {
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
}]);
