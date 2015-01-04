(function() {
	var app = angular.module("itinerary");

	var SearchController = function($scope, $location) {

		$scope.search = function(source, dest, destList) {
			$scope.source = "a";
			$scope.dest = "b";
			$scope.destList = "Shimla";

			$location.path("/searchGrid/");
		};

	};

	app.controller("SearchController", SearchController);
}());