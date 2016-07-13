
angular.module('yhapp', ['ionic', 'yhapp.controllers', 'yhapp.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller:"loginCtrl"
    })

    .state('admin', {
      url: '/admin',
      templateUrl: 'templates/admin.html',
      controller:"adminCtrl"
    })
    .state('createrole', {
      url: '/createrole',
      templateUrl: 'templates/createrole.html',
      controller:"createroleCtrl"
    })

    .state('commentator', {
      url: '/commentator',
      templateUrl: 'templates/commentator.html',
      controller:"commentatorCtrl"
    })
    .state('com_taskperformance', {
      url: '/com_taskperformance',
      templateUrl: 'templates/com_taskperformance.html',
      controller:"com_taskperformanceCtrl"
    })


    .state('personalinfo', {
      url: '/personalinfo',
      templateUrl: 'templates/personalinfo.html',
      controller:"personalinfoCtrl"
    })

    .state('commentatorlist', {
      url: '/commentatorlist',
      templateUrl: 'templates/commentatorlist.html',
      controller:"commentatorlistCtrl"
    })
    .state('grouplist', {
      url: '/grouplist',
      templateUrl: 'templates/grouplist.html',
      controller:"grouplistCtrl"
    })

    .state('notification', {
      url: '/notification',
      templateUrl: 'templates/notification.html',
      controller:"notificationCtrl"
    })

    .state('releasetask', {
      url: '/releasetask',
      templateUrl: 'templates/releasetask.html',
      controller:"releasetaskCtrl"
    })
    .state('performtask', {
      url: '/performtask',
      templateUrl: 'templates/performtask.html',
      controller:"performtaskCtrl"
    })
    .state('tasklist', {
      url: '/tasklist',
      templateUrl: 'templates/tasklist.html',
      controller:"tasklistCtrl"
    })
    .state('taskdetails', {
      url: '/taskdetails',
      templateUrl: 'templates/taskdetails.html',
      controller:"taskdetailsCtrl"
    })
    .state('submittask', {
      url: '/submittask',
      templateUrl: 'templates/submittask.html',
      controller:"submittaskCtrl"
    })

    .state('setting', {
      url: '/setting',
      templateUrl: 'templates/setting.html',
      controller:"settingCtrl"
    })
    .state('setnotification', {
      url: '/setnotification',
      templateUrl: 'templates/setnotification.html',
      controller:"setnotificationCtrl"
    })
    .state('security', {
      url: '/security',
      templateUrl: 'templates/security.html',
      controller:"securityCtrl"
    })
    .state('feedback', {
      url: '/feedback',
      templateUrl: 'templates/feedback.html',
      controller:"feedbackCtrl"
    })
    .state('about', {
      url: '/about',
      templateUrl: 'templates/about.html',
      controller:"aboutCtrl"
    })


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
