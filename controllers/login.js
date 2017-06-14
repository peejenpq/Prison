angular.module('starter')
  .controller('login', function ($scope, $state, $ionicPopup, $http) {
    $scope.form = {};
    $scope.resultAction = "";
    $scope.btnForgot = function () {
      $state.go('forgot_pass');
    };
    $scope.btnActivate = function () {
      $state.go('activate');
    };

    $scope.btnLogin = function () {
      if ($scope.form.txt_id == '1') {
        $state.go('selectPlace');
      }
      $http({
          url: 'http://27.131.160.116:8080/wsPrison/login.php',
          method: 'POST',
          data: {
            'var_id': $scope.form.txt_id,
            'var_pass': $scope.form.txt_pass
          }
        }//http
      ).then(function (response) {
        console.log(response);
        console.log(response.data.results);

        if (response.data.results == 'not match') {
          $scope.showAlert('รหัสผู้ใช้ หรือ รหัสผ่านไม่ถูกต้อง');
        }
        else if (response.data.results == 'Error') {
          $scope.showAlert('เกิดข้อผิดพลาดบางอย่างกรุณาติดต่อผู้ดูแลระบบ');
        }
        else if (response.data.results == 'match') {
          $state.go('selectPlace');
          /* สร้าง object ชื่อ 'login' */
          var login = $scope.form.txt_id;
          localStorage.setItem('login', login);
          console.log(localStorage.getItem('login'));
        }
        else {
          $scope.showAlert('เกิดข้อผิดพลาดบางอย่างกรุณาติดต่อผู้ดูแลระบบ');
        }
      }, function (error) {
        $scope.resultAction = "เกิดข้อผิดพลาดบางอย่างกรุณาติดต่อผู้ดูแลระบบ";
      });//then
      $scope.showAlert = function (msg) {
        var alertPopup = $ionicPopup.alert({
          title: 'Warning Message',
          template: msg
        });
      };
    }; //btnLogin
  });
