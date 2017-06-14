angular.module('starter')

  .controller('history',function ($scope,$state,$http,$timeout,$ionicLoading) {

    console.log('history Start');
    $scope.btnBack = function () {
      $state.go('selectPlace');
    };

    // $http(
    //   {
    //     url:'http://27.131.160.116:8080/wsPrison/History.php'
    //   }//http
    //
    // ).then(function (response) {
    //   console.log(response);
    //   console.log(response.data.results);
    //
    // },function (error) {
    //   $scope.resultAction = "System Error";
    // });
    // An alert dialog
    $scope.showAlert = function(msg) {
      var alertPopup = $ionicPopup.alert({
        title: 'Warning Message',
        template: msg
      });
    };

    // $timeout(function () {
      $http.get('http://27.131.160.116:8080/wsAnanda/history_vms.php')
        .then(function(response){
          console.log(response.data.results);
          $scope.myData = response.data.results;
        }, function(error){
          console.log(error);
        });

    //   $ionicLoading.hide();
    // },1000);

    $scope.btnDetail = function (data) {
      console.log(data);
      console.log('btn Detail Pressed');
      $state.go('history_vms_detail',{Room:data.Room,Status:data.Status,Time:data.Time});
    }
  });
