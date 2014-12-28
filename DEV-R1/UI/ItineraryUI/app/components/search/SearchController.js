(function() {
 var app = angular.module("itinerary");
	
	var SearchController = function($scope){
		
		$scope.search=function(source,dest,destList){
			$scope.source = "a";
			$scope.dest = "b";
			$scope.destList = "Shimla";
		};
		
	};
	
	app.controller("SearchController",SearchController); 
}());