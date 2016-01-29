angular.module('myApp', ['ionic', 'myApp.controllers', 'myApp.directive'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        window.StatusBar.styleDefault();
      }
    });
  })
  .config(function($stateProvider, $urlRouterProvider) {
    // Same tab template should use the same:
    // views: {'tab-xxx':{}} in route config
    $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/main.html',
        controller: 'AppCtrl'
      })

    .state('app.home', {
      url: '/home',
      views: {
        'tab-home': {
          templateUrl: 'templates/views/home.html',
          controller: 'HomeCtrl'
        }
      }
    })

    .state('app.search', {
        url: '/search',
        views: {
          'tab-search': {
            templateUrl: 'templates/views/search.html',
            controller: 'SearchCtrl'
          }
        }
      })
      .state('app.result', {
        url: '/result',
        views: {
          'tab-search': {
            templateUrl: 'templates/views/result.html',
            controller: 'SearchResultCtrl'
          }
        }
      })

    .state('app.course', {
        url: '/course',
        views: {
          'tab-course': {
            templateUrl: 'templates/views/course.html',
            controller: 'CourseCtrl'
          }
        }
      })
      .state('app.detail', {
        url: '/detail',
        views: {
          'tab-home': {
            templateUrl: 'templates/views/detail.html',
            controller: 'CourseDetailCtrl'
          }
        }
      })

    .state('app.profile', {
      url: '/profile',
      views: {
        'tab-profile': {
          templateUrl: 'templates/views/profile.html',
          controller: 'ProfileCtrl'
        }
      }
    })

    .state('app.list', {
        url: '/list',
        views: {
          'tab-home': {
            templateUrl: 'templates/views/list.html',
            controller: 'CourseListCtrl'
          }
        }
      })
      .state('app.confirm', {
        url: '/confirm',
        views: {
          'tab-home': {
            templateUrl: 'templates/views/confirmation.html',
            controller: 'CourseConfirmCtrl'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    var defaultRoute = '/app/home';
    $urlRouterProvider.otherwise(defaultRoute);
  });
