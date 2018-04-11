var myApp=angular.module('myApp',['ngRoute']);
myApp.config(function($routeProvider){
$routeProvider
.when('/todo',{
templateUrl:'templates/index.html',
controller:'Submit'
})
.otherwise({
  redirectTo:"/todo"
});
});