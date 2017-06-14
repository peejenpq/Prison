angular.module('starter')

  .controller('selectPlace', function ($scope, $state,$http) {
    console.log('selectPlace start');

    $http.get('http://27.131.160.116:8080/wsPrison/SelectPlace.php')
      .then(function(response){
        $scope.myData = response.data.results;
      }, function(error){
        console.log(error);
      });
    $scope.btnSubmit = function () {
      $state.go('selectTime');
    };
    $scope.btnLogout = function () {
      $state.go('login');
      localStorage.clear();
      console.log('Logout Pressed');
    };
    $scope.btnUser = function () {
      $state.go('user');
      console.log('user Pressed')
    };
    $scope.btnBooking = function () {
      $state.go('booking');
    };
  });
