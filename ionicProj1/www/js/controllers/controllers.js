angular.module('myApp.controllers', [])
  .controller('AppCtrl', function($scope) {

  })
  .controller('HomeCtrl', function($scope) {
    // slider options
    $scope.options = {
      loop: true
    };
    $scope.data = {};
    $scope.$watch('data.slider', function(nv, ov) {
      $scope.slider = $scope.data.slider;
    });
  })
  .controller('SearchCtrl', function($scope) {

  })
  .controller('SearchResultCtrl', function($scope) {

  })
  .controller('CourseCtrl', function($scope) {

  })
  .controller('ProfileCtrl', function($scope) {
    $scope.isLogin = true;
  });
