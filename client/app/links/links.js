angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth, $location) {
  // Your code here

  $scope.data = {};

  if (!Auth.isAuth()) {
    $location.path('/signin');
  }

  $scope.getAll = function () {
    Links.getAll()
      .then(function (data) {
        $scope.data.links = data;
        // console.log('$scope.links: ', $scope.links);
      });
  };

  $scope.addOne = function () {
    console.log($scope.newLink);
    Links.addOne($scope.newLink)
      .then(function (data) {
      });
  };

  $scope.getAll();

});
