(function() {
	var app = angular.module("itinerary", [ "ngRoute","ui.bootstrap"]);

	app.config(function($routeProvider) {
		$routeProvider.when("/search", {
			templateUrl: "app/components/itinerarySearch/searchForm/searchForm.html",
			controller: "SearchFormController"
		}).when("/searchGrid", {
			templateUrl : "app/components/itinerarySearch/searchGrid/searchGrid.html",
			controller : "SearchGridController"
		}).when("/itineraryDetail", {
			templateUrl : "app/components/itineraryDetail/travel/travel.html",
			controller : "TravelController"
		}).when("/travel", {
			templateUrl : "app/components/itineraryDetail/travel/travel.html",
			controller : "TravelController"
		}).when("/sightseeing", {
			templateUrl : "app/components/itineraryDetail/sightseeing/sightseeing.html",
			controller : "SightseeingController"
		}).when("/hotel", {
			templateUrl : "app/components/itineraryDetail/hotel/hotel.html",
			controller : "HotelController"
		}).otherwise({
			redirectTo : "/search"
		});
	});

}());

