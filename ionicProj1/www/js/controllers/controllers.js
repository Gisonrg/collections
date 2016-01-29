angular.module('myApp.controllers', [])
  .controller('AppCtrl', function($scope) {

  })
  .controller('HomeCtrl', function($scope, $state) {
    // slider options
    $scope.options = {
      loop: true
    };
    $scope.data = {};
    $scope.$watch('data.slider', function(nv, ov) {
      $scope.slider = $scope.data.slider;
    });
  })
  .controller('CourseListCtrl', function($scope) {

  })
  .controller('CourseDetailCtrl', function($scope) {

  })
  .controller('SearchCtrl', function($scope) {

  })
  .controller('SearchResultCtrl', function($scope) {

  })
  .controller('CourseCtrl', function($scope) {

  })
  .controller('CourseConfirmCtrl', function($scope) {

  })
  .controller('SettingCtrl', function($scope, $state, $ionicHistory) {
    $scope.goToProfile = function() {
      $ionicHistory.nextViewOptions({
        disableAnimate: true,
        disableBack: true
      });
      $state.go('app.profile');
    };
  })
  .controller('ProfileCtrl', function($scope) {
    $scope.isLogin = true;
  });
