(function(){
	//logic goes here
	'use strict';

	//define main app
	angular.module('myFirstApp',[])

	.controller('myFirstController',function($scope){
		$scope.name="Bhavin";
		$scope.sayHello=function(){
			return "Hello World";
		};
	});

})();