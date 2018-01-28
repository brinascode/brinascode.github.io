app.controller("Opened",
	["$scope","$http","$location","$window",function($scope,$http,$location,$window)
{


$scope.user
$http.get("/userinfo").success(function(data){
	$scope.user = data
	console.log(data)
})

$scope.logout= function(){
	$window.location.href="/logout"
}


}])