angular.module('starter')

  .controller('selectTime', function ($scope, $state ,$http ,$window) {
    console.log('selectTime start');
    $scope.date = new Date();
    $scope.form = {};

    $scope.btnBack = function () {
      $state.go('selectPlace');
    };
    $http.get('http://27.131.160.116:8080/wsPrison/SelectTime.php').then(function (response) {
      console.log(response.data.current);
      $scope.myData = response.data.current;
    }, function(error){
      console.log(error);
    });

    $scope.btnSearch = function () {
      console.log('Search Pressed');
      console.log($scope.form.txt_date);

      $http({
          url: 'http://27.131.160.116:8080/wsPrison/get_date.php',
          method: 'POST',
          data: {
            'var_date': $scope.form.txt_date
          }
        }//http
      ).then(function (response) {
        console.log(response);
        console.log(response.data.get_date);
        $scope.myData = response.data.get_date;
      }, function (error) {
        $scope.resultAction = "เกิดข้อผู้พลาดบางอย่างกรุณาติดต่อผู้ดูแลระบบ";
      });//then
      // $window.location.reload(true);
    };

    $scope.showAlert = function (msg) {
      var alertPopup = $ionicPopup.alert({
        title: 'Warning Message',
        template: msg
      });
    };
    // $scope.myDataArray = [
    //   {
    //     num: '1',
    //     time: '08.00-08.45',
    //     limit: '5',
    //     status: 'ว่าง',
    //     place: 'เรือนจำจังหวัดสระแก้ว'
    //   },
    //   {
    //     num: "2",
    //     time: "09.00-09.45",
    //     limit: "0",
    //     status: "เต็ม",
    //     place: 'เรือนจำจังหวัดสระแก้ว'
    //   },
    //   {
    //     num: "3",
    //     time: "10.00-10.45",
    //     limit: "5",
    //     status: "ว่าง",
    //     place: 'เรือนจำมหาสารคาม'
    //   },
    //   {
    //     num: "4",
    //     time: "11.00-11.45",
    //     limit: "0",
    //     status: "เต็ม",
    //     place: 'เรือนจำมหาสารคาม'
    //   },
    //   {
    //     num: '5',
    //     time: '13.00-13.45',
    //     limit: '2',
    //     status: 'ว่าง',
    //     place: 'เรือนจำจังหวัดสระแก้ว'
    //   }
    //   ,
    //   {
    //     num: '6',
    //     time: '14.00-14.45',
    //     limit: '2',
    //     status: 'ว่าง',
    //     place: 'เรือนจำจังหวัดสระแก้ว'
    //   }
    //   ,
    //   {
    //     num: '7',
    //     time: '15.00-15.45',
    //     limit: '2',
    //     status: "ว่าง",
    //     place: 'เรือนจำมหาสารคาม'
    //   }
    //   ,
    //   {
    //     num: '8',
    //     time: '16.00-16.45',
    //     limit: '2',
    //     status: 'ว่าง',
    //     place: 'เรือนจำมหาสารคาม'
    //   }
    //   ,
    //   {
    //     num: '9',
    //     time: '17.00-17.45',
    //     limit: '2',
    //     status: 'ว่าง',
    //     place: 'เรือนจำมหาสารคาม'
    //   }
    //   ,
    //   {
    //     num: '10',
    //     time: '17.45-18.15',
    //     limit: '2',
    //     status: 'ว่าง',
    //     place: 'เรือนจำมหาสารคาม'
    //   }
    // ];
    ////////
    $scope.btnSubmit = function (data) {
      console.log(data);
      console.log('Pressed');
      $state.go('status',{number:data.number,time:data.time,name:data.name,date:data.date});
    }
  });
