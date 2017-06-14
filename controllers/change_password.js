angular.module('starter')

  .controller('change_password', function ($scope, $state, $http) {
    $scope.form = {};
    $scope.showAlert = function (msg) {
      var alertPopup = $ionicPopup.alert({
        title: 'Warning Message',
        template: msg
      });
    };
    $scope.btnBack = function () {
      $state.go('user');
    };
    $scope.btnPassword = function () {
      $state.go('chang_password');
    };
    $scope.btnEdit = function () {
      $state.go('edit_user');
    };

    if ($scope.form.txt_newpass == $scope.form.txt_confirm) {
      $http({
          url: 'http://27.131.160.116:8080/wsPrison/change_password.php',
          method: 'POST',
          data: {
            'var_pass': $scope.form.txt_pass,
            'var_confirm': $scope.form.txt_confirm
          }
        }//http
      ).then(function (response) {
        console.log(response);
        console.log(response.data.results);

        if (response.data.results == 'Error') {
          $scope.showAlert('เกิดข้อผู้พลาดบางอย่างกรุณาติดต่อผู้ดูแลระบบ');
        }
        else if (response.data.results == 'match') {
          $state.go('selectPlace');
          $scope.showAlert('แก้ไขรหัสผ่านเรียบร้อย');
        }
        else {
          $scope.showAlert('เกิดข้อผู้พลาดบางอย่างกรุณาติดต่อผู้ดูแลระบบ');
        }
      }, function (error) {
        $scope.resultAction = "เกิดข้อผู้พลาดบางอย่างกรุณาติดต่อผู้ดูแลระบบ";
      });//then
    }//if

    else {
      $scope.showAlert('รหัสผ่านไม่ตรงกัน');
    }
  });
