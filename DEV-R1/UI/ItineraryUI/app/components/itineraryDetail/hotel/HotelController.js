(function() {
	var app = angular.module("itinerary");

	var HotelController = function($scope) {

		$scope.onFormSubmit = function(){
			alert("Submitted!");
		}
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

	app.controller("HotelController", HotelController);

}());
