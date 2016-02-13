angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here

  $scope.getAll = function() { 
    Links.getAll()
      .then(function(data) {
        console.log('links.js data: ', data);
        $scope.data = data;
        // console.log('$scope.links: ', $scope.links);
      });
  };




  $scope.addOne = function(){
    console.log($scope.newLink);
    Links.addOne($scope.newLink)
      .then(function(data) {
        console.log('links.js then and the data is ', data);
      });
    // $scope.data.push($scope.newLink);
    //$scope.getAll();
  };

  $scope.getAll();

});
