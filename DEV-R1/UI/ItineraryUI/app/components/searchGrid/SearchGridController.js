(function() {
	var app = angular.module("itinerary");

	var SearchGridController = function($scope) {
		$scope.oneAtATime = true;

		$scope.days = [ {
			title : 'Day 1',
			contents : [ 'Travel', 'Sightseeing', 'Hotel' ]
		}, {
			title : 'Day 2',
			contents : [ 'Travel', 'Sightseeing', 'Hotel' ]
		} ];

		$scope.addDay = function() {
			var newItemNo = $scope.days.length + 1;
			var newDay = {
				title : 'Day ' + newItemNo,
				contents : [ 'Travel', 'Sightseeing', 'Hotel' ]
			};
			$scope.days.push(newDay);
		};

		$scope.removeLastDay = function() {
			$scope.days.pop();
		};
		
	};

	app.controller("SearchGridController", SearchGridController);

}());
