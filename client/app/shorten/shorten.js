angular.module('shortly.shorten', [])

.controller('ShortenController', ['$scope', '$http', '$location', 'Links', function ($scope, $http, $location, Links) {
  $scope.link = {};
  $scope.addLink = function(url) {
    $http.post('/api/links', {url: url}).success(function(data) {
      console.log('data returned from POST to /api/links',data);
      // $scope.link
    });
  };
}]);
