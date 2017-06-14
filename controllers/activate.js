angular.module('starter')

  .controller('activate', function ($scope, $state) {
    console.log('activate start');
    $scope.form = {};

    $scope.btnActivate = function () {
      $state.go('login');
    };
    $scope.btnCancel = function () {
      $state.go('login');
    };
  });
