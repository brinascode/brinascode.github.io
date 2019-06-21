var app = angular.module("mymgis",["ngRoute"])

app.config(function($routeProvider,$locationProvider){

$routeProvider
.when("/",{
	controller:"Welcome",
	templateUrl:"templates/welcome.html"
})
.when("/login",{
	controller:"LogSign",
	templateUrl:"templates/login.html"
})


$locationProvider.html5Mode(true)
})