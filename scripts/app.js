angular.module('pagespeed',['ngRoute','mgcrea.ngStrap','ngCookies'])
.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
	$routeProvider
	.when('/home',{
		templateUrl:'pageinsights/views/home.html',
		controller:'homectrl'
	})
	.when('/url',{
		templateUrl:'pageinsights/views/url.html',
		controller:'homectrl'
	})
	
	
	 .otherwise({
		redirectTo:'/home'
	}) 
	$locationProvider.html5Mode(true);
}])
.run(function ($rootScope, $location, $route, $http) {
  $rootScope.$on('$routeChangeStart',
    function (event, next, current) {
    	
  });
});
