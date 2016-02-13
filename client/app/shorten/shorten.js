angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  // Your code here
  $scope.link = {};

  if (!Auth.isAuth()) {
    $location.path('/signin');
  }

  $scope.addLink = function () 
    Links.addOne($scope.newLink)
      .then(function (data) {
        $location.path('/links');
      });
  };

});
