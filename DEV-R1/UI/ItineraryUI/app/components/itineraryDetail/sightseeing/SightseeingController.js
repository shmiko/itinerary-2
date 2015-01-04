(function() {
	var app = angular.module("itinerary");

	var SightseeingController = function($scope) {
		$scope.places = [ {
			placeName : 'Shimla',
			comment : 'Beautiful'
		}, {
			placeName : 'Goa',
			comment : 'Awesome!'
		} ];

		$scope.addPlace = function() {
			var newItemNo = $scope.places.length + 1;
			var newPlace = {
					placeName : 'Place',
					comment : 'Comment'
			};
			$scope.places.push(newPlace);
		};

		$scope.removeLastPlace = function() {
			$scope.places.pop();
		};

	};

	app.controller("SightseeingController", SightseeingController);

}());
