var app=angular.module('myApp',['ngRoute','ngStorage']);

app.controller('myCtrl',function($scope){


});


app.controller('loginController',['$scope', '$http','$localStorage', '$sessionStorage','$location', function($scope, $http,$localStorage,$sessionStorage,$location){

  $scope.flogin = function(){
        //  console.log($scope.user);
          $http.post('api/user/login', $scope.user).success(function(response){
            console.log(response);
             $localStorage.resDataRest =response;
             $location.path('/main');

          }).error(function(error){
              console.log(error);
          })
      }


}]);


app.controller('registerController',['$scope','$http','$localStorage', '$sessionStorage','$location',function($scope,$http,$localStorage,$sessionStorage,$location){

  $scope.register = function(){
          
          $http.post('api/user/signup', $scope.user).success(function(response){
             $localStorage.resDataRest =response;
             $location.path('/main');

          }).error(function(error){
              console.log(error);
          })
      }


}]);
app.controller('mainController',['$scope','$localStorage', '$sessionStorage',function($scope,$localStorage,$sessionStorage){
   $scope.data = $localStorage.resDataRest;

}]);

app.config(['$routeProvider', function($routeProvider) {
   $routeProvider.
   when('/', {
      templateUrl: 'app/home.html', controller: 'mainController'
   }).
   when('/login', {
      templateUrl: 'app/login.html', controller: 'loginController'
   }).
   when('/register', {
      templateUrl: 'app/register.html', controller: 'registerController'
   }).
   when('/main', {
      templateUrl: 'app/main.html', controller: 'mainController'
   }).
   otherwise({
      redirectTo: '/'
   });

}]);

app.directive('login',function(){
  return {
    restrict:'E',
    templateUrl:'app/login.html'
  }
});

app.directive('register',function(){
  return {
    restrict:'E',
    templateUrl:'app/register.html'
  }
});
