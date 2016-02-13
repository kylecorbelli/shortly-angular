angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  // Your code here
  $scope.link = {};

  if (!Auth.isAuth()) {
    console.log('stay out my cookie jar');
    $location.path('/signin');
  }

  $scope.addLink = function () {
    console.log($scope.newLink);
    Links.addOne($scope.newLink)
      .then(function (data) {
        $location.path('/links')
      });
  };

});
