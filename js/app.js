// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova'])

.run(function($ionicPlatform,$ionicPopup) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    //check connection
    if (window.Connection) {
      if (navigator.connection.type == Connection.NONE) {
        $ionicPopup.alert({
          title: "ขาดการเชื่อมต่ออินเตอร์เน็ต",
          content: "อุปกรณ์ของคุณไม่ได้เชื่อมต่อกับอินเตอร์เน็ต"
        })
          .then(function (result) {
            if (result) {
              ionic.Platform.exitApp();
            }
          })
      }
    }//check connection

  });
})

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'login'
      });
    $stateProvider
      .state('forgot_pass', {
        url: '/forgot_pass',
        templateUrl: 'templates/forgot_pass.html',
        controller: 'forgot_pass'
      });
    $stateProvider
      .state('qrcode', {
        url: '/qrcode',
        templateUrl: 'templates/qrcode.html',
        controller: 'qrcode'
      });
    $stateProvider
      .state('selectPlace', {
        url: '/selectPlace',
        templateUrl: 'templates/selectPlace.html',
        controller: 'selectPlace'
      });
    $stateProvider
      .state('selectTime', {
        url: '/selectTime',
        templateUrl: 'templates/selectTime.html',
        controller: 'selectTime'
      });
    $stateProvider
      .state('status', {
        url: '/status:{number}/{date}/{time}/{name}',
        templateUrl: 'templates/status.html',
        controller: 'status'
      });
    $stateProvider
      .state('activate', {
        url: '/activate',
        templateUrl: 'templates/activate.html',
        controller: 'activate'
      });
    $stateProvider
      .state('history', {
        url: '/history',
        templateUrl: 'templates/history.html',
        controller: 'history'
      });
    $stateProvider
      .state('history_vms_detail', {
        url: '/history_vms_detail:{Room}/{Status}/{Time}',
        templateUrl: 'templates/history_vms_detail.html',
        controller: 'history_vms_detailCtrl'
      });
    $stateProvider
      .state('booking', {
        url: '/booking',
        templateUrl: 'templates/booking.html',
        controller: 'booking'
      });
    $stateProvider
      .state('user', {
        url: '/user',
        templateUrl: 'templates/user.html',
        controller: 'user'
      });
    $stateProvider
      .state('edit_user', {
        url: '/edit_user',
        templateUrl: 'templates/edit_user.html',
        controller: 'edit_user'
      });
    $stateProvider
      .state('change_password', {
        url: '/change_password',
        templateUrl: 'templates/change_password.html',
        controller: 'change_password'
      });
    $urlRouterProvider.otherwise('/login');
  });
