angular.module('starter')

  .controller('qrcode', function ($scope, $state) {
    console.log('qrcode');
    $scope.btnSubmit = function () {
      $state.go('booking');
    };
  });
