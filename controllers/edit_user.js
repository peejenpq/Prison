angular.module('starter')

  .controller('edit_user', function ($scope, $state, $http) {
    console.log('edit_user start');
    $scope.btnBack = function () {
      $state.go('user');
    };
    $http.get('http://27.131.160.116:8080/wsPrison/data_user.php')
      .then(function (response) {
        console.log(response.data.results);
        $scope.myData = response.data.results;
      }, function (error) {
        console.log(error);
      });
  });
