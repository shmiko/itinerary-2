(function() {
	var app = angular.module("itinerary");

	var SearchGridController = function($scope) {
		$scope.itineraries = [ {
			title : 'Trip to Himachal Pradesh',
			destinations : [ 'Shimla', 'Manali', 'Dalhousie' ],
			imgSrc:'http://upload.wikimedia.org/wikipedia/commons/2/20/Khajjiar.jpg',
			startDate:'01/26/2015',
			endDate:'01/30/2015',
			modesOfTransport:['Flight, Train, Car'],
			cost:'Rs 30,000'
		}, {
			title : 'Trip to Andaman and Nicobar Islands',
			destinations : [ 'Havelock Island', 'Smith Island', 'Anderson Island' ],
			imgSrc:'http://upload.wikimedia.org/wikipedia/commons/c/c2/Wandoor_Beach_Andaman_4160169.JPG',
			startDate:'10/26/2014',
			endDate:'11/3/2014',
			modesOfTransport:['Flight, Ship'],
			cost:'Rs 70,000'
		}, {
			title : 'Trip to Gujarat',
			destinations : [ 'Ahmedabad', 'Gandhinagar', 'Surat' ],
			imgSrc:'http://upload.wikimedia.org/wikipedia/commons/8/8b/Ahmedabad_BRTS.jpg',
			startDate:'02/26/2015',
			endDate:'02/30/2015',
			modesOfTransport:['Flight, Train, Car'],
			cost:'Rs 30,000'
		}
		];

	};

	app.controller("SearchGridController", SearchGridController);

}());
