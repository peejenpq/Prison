angular.module('starter')

  .controller('status', function ($scope, $state, $stateParams) {
    console.log('status start');
    console.log($stateParams);
    $scope.txtNumber = $stateParams.number;
    $scope.txtDate = $stateParams.date;
    $scope.txtTime = $stateParams.time;
    $scope.txtName = $stateParams.name;


    $scope.btnBack = function(){
      console.log('Back Pressed');
      $state.go('selectTime');
    };
    $scope.btnSubmit = function(){
      console.log('Back Pressed');
      $state.go('qrcode');
    };
  });
