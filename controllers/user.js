angular.module('starter')

  .controller('user', function ($scope, $state, $http) {
    console.log('User start');
    console.log(JSON.parse(localStorage.getItem('login')));

    $scope.btnBack = function () {
      $state.go('selectPlace');
    };
    $scope.btnPassword = function () {
      $state.go('change_password');
    };
    $scope.btnEdit = function () {
      $state.go('edit_user');
    };
    $http({
        url: 'http://27.131.160.116:8080/wsPrison/data_user.php',
        method: 'POST',
        data: {
          'var_id': JSON.parse(localStorage.getItem('login'))
        }
      }//http
    ).then(function (response) {
      console.log(response);
      console.log(response.data.results);
      $scope.myData = response.data.results;
    }, function (error) {
      $scope.resultAction = "เกิดข้อผู้พลาดบางอย่างกรุณาติดต่อผู้ดูแลระบบ";
    });//then
    $scope.showAlert = function (msg) {
      var alertPopup = $ionicPopup.alert({
        title: 'Warning Message',
        template: msg
      });
    }

  });
