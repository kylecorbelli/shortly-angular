angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};

  $scope.addLink = function () {
    console.log($scope.newLink);
    Links.addOne($scope.newLink)
      .then(function (data) {
        console.log('links.js then and the data is ', data);
      });
    // $scope.data.push($scope.newLink);
    //$scope.getAll();
  };

});
