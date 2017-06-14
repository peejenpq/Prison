angular.module('starter')

  .controller('booking', function ($scope, $state) {
    console.log('booking start');
    $scope.btnBack = function () {
      $state.go('selectPlace');
    };
    $scope.myDataArray = [
      {
        num: '1',
        time: "08.00-08.30",
        place: "เรือนจำจังหวัดสระแก้ว",
        date: "12/5/2560"
      },
      {
        num: '2',
        time: '09.00-09.30',
        place: 'เรือนจำมหาสารคาม',
        date: "13/5/2560"
      },
      {
        num: '3',
        time: '10.00-10.30',
        place: 'เรือนจำจังหวัดสระแก้ว',
        date: "14/5/2560"
      },
      {
        num: '4',
        time: '11.00-11.30',
        place: 'เรือนจำมหาสารคาม',
        date: "15/5/2560"
      },
      {
        num: '5',
        time: "13.00-13.30",
        place: "เรือนจำจังหวัดสระแก้ว",
        date: "16/5/2560"
      }
      ,
      {
        num: "6",
        time: "14.00-14.30",
        place: "เรือนจำมหาสารคาม",
        date: "17/5/2560"
      }
      ,
      {
        num: "7",
        time: "15.00-15.30",
        place: "เรือนจำมหาสารคาม",
        date: "18/5/2560"
      }
      ,
      {
        num: "8",
        time: "16.00-16.30",
        place: "เรือนจำจังหวัดสระแก้ว",
        date: "19/5/2560"
      }
      ,
      {
        num: "9",
        time: "17.00-17.30",
        place: "เรือนจำมหาสารคาม",
        date: "20/5/2560"
      }
      ,
      {
        num: "10",
        time: "17.30-18.00",
        place: "เรือนจำจังหวัดสระแก้ว",
        date: "21/5/2560"
      }
    ];
    ////////
    $scope.btnSubmit = function (data) {
      console.log(data);
      console.log('Pressed');
      $state.go('status');
    }
  });
