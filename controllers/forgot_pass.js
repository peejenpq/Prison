angular.module('starter')

  .controller('forgot_pass', function ($scope, $state, $http, $ionicPopup) {

    console.log('history Start');
    $scope.btnCancel = function () {
      $state.go('login');
    };
    $scope.form = {};

    $scope.btnSubmit = function () {
      $http({
          url: 'http://27.131.160.116:8080/wsPrison/sendmail.php',
          method: 'POST',
          data: {
            'var_id': $scope.form.txt_id,
            'var_email': $scope.form.txt_email
          }
        }//http
      ).then(function (response) {
        console.log(response);
        console.log(response.data.results);
        if (response.data.results == 'Mail not found') {
          $scope.showAlert('ไม่พบรหัสประชาชนหรืออีเมลล์นี้');
        }
        else if(response.data.results == 'Please enter email'){
          $scope.showAlert('กรุณากรอกอีเมลล์');
        }
        else if (response.data.results == 'Mail sending') {
          $scope.showAlert('ระบบได้ทำการส่งรหัสผ่านใหม่ไป Email ของคุณแล้ว');
        }
        else if (response.data.results == 'Mail Error') {
          $scope.showAlert('ระบบผิดพลาดกรุณาติดต่อผู้ดูแลระบบ');
        }
        console.log($scope.form.txt_id);
        console.log($scope.form.txt_email);
      });
    };


    $scope.showAlert = function (msg) {
      var alertPopup = $ionicPopup.alert({
        title: 'Warning Message',
        template: msg
      });
    };
  });
