angular.module('yhapp.controllers', [])

// .controller('model', function($scope) {

// })

.controller('loginCtrl', function($scope) {
  console.log("123");
})

.controller('adminCtrl', function($scope,$ionicHistory) {
  console.log("123");
  $scope.onClickBackward = function()
  {
  	$ionicHistory.goBack();
  }
})
.controller('createroleCtrl', function($scope,$ionicHistory) {
  console.log("123");
  $scope.onClickBackward = function()
  {
  	$ionicHistory.goBack();
  }
})

.controller('commentatorCtrl', function($scope,$ionicHistory) {
  console.log("123");
  $scope.onClickBackward = function()
  {
  	$ionicHistory.goBack();
  }
})

.controller('com_taskperformanceCtrl', function($scope,$ionicHistory) {
  console.log("123");
  $scope.onClickBackward = function()
  {
  	$ionicHistory.goBack();
  }
})

.controller('personalinfoCtrl', function($scope,$ionicHistory) {
  console.log("123");
  $scope.onClickBackward = function()
  {
  	$ionicHistory.goBack();
  }
})

.controller('commentatorlistCtrl', function($scope,$ionicHistory) {
  console.log("123");
  $scope.onClickBackward = function()
  {
  	$ionicHistory.goBack();
  }
})

.controller('grouplistCtrl', function($scope,$ionicHistory) {
  console.log("123");
  $scope.onClickBackward = function()
  {
  	$ionicHistory.goBack();
  }
})

.controller('notificationCtrl', function($scope,$ionicHistory,$ionicScrollDelegate,$ionicModal) {
    $scope.onClickBackward = function()
    {
    	$ionicHistory.goBack();
    }
    $scope.back2top = function()
    {
      $ionicScrollDelegate.$getByHandle('notification').scrollTop(true);
    }
    $scope.filter = function()
    {
      
    }
})

.controller('releasetaskCtrl', function($scope,$ionicHistory) {
  console.log("123");
  $scope.onClickBackward = function()
  {
  	$ionicHistory.goBack();
  }
})

.controller('performtaskCtrl', function($scope,$ionicHistory) {
  console.log("123");
  $scope.onClickBackward = function()
  {
  	$ionicHistory.goBack();
  }
})

.controller('tasklistCtrl', function($scope,$ionicHistory) {
  console.log("123");
  $scope.onClickBackward = function()
  {
  	$ionicHistory.goBack();
  }
})

.controller('taskdetailsCtrl', function($scope,$ionicHistory) {
  console.log("123");
  $scope.onClickBackward = function()
  {
  	$ionicHistory.goBack();
  }
})

.controller('submittaskCtrl', function($scope,$ionicHistory) {
  console.log("123");
  $scope.onClickBackward = function()
  {
  	$ionicHistory.goBack();
  }
})

.controller('settingCtrl', function($scope,$ionicHistory) {
  console.log("123");
  $scope.onClickBackward = function()
  {
  	$ionicHistory.goBack();
  }
})

.controller('setnotificationCtrl', function($scope,$ionicHistory) {
  console.log("123");
  $scope.onClickBackward = function()
  {
  	$ionicHistory.goBack();
  }
})
.controller('securityCtrl', function($scope,$ionicHistory) {
  console.log("123");
  $scope.onClickBackward = function()
  {
    $ionicHistory.goBack();
  }
})
.controller('changepasswordCtrl', function($scope,$ionicHistory) {
  console.log("123");
  $scope.onClickBackward = function()
  {
  	$ionicHistory.goBack();
  }
})

.controller('feedbackCtrl', function($scope,$ionicHistory) {
  console.log("123");
  $scope.onClickBackward = function()
  {
  	$ionicHistory.goBack();
  }
})

.controller('aboutCtrl', function($scope,$ionicHistory) {
  console.log("123");
  $scope.onClickBackward = function()
  {
    $ionicHistory.goBack();
  }
  $scope.appinfo={
    "VersionNumber":"",
    "AppName":"",
    "PackageName":"",
    "VersionCode":"",
    "Describe":"",
    "author":"BME319",
    "email":"***@***.com"
  }
  if(ionic.Platform.platform()!='win32')
  {
    cordova.getAppVersion.getVersionNumber().then(function (version) {
        console.log(version);
        $scope.appinfo.VersionNumber = version;
    });
    cordova.getAppVersion.getAppName().then(function (version) {
        console.log(version);
        $scope.appinfo.AppName = version;
    });
    cordova.getAppVersion.getPackageName().then(function (version) {
        console.log(version);
        $scope.appinfo.PackageName = version;
    });
    cordova.getAppVersion.getVersionCode().then(function (version) {
        console.log(version);
        $scope.appinfo.VersionCode = version;
    });
    $scope.appinfo.Describe = "引航app";
  }else{
    $scope.appinfo={
      "VersionNumber":"VersionNumber",
      "AppName":"AppName",
      "PackageName":"PackageName",
      "VersionCode":"VersionCode",
      "Describe":"电脑上看你妹的关于",
      "author":"BME319",
      "email":"***@***.com"
    }
  }
})