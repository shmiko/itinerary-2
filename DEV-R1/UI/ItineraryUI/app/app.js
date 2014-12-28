(function() {
	var app = angular.module("itinerary", [ "ngRoute" ]);

	app.config(function($routeProvider) {
		$routeProvider.when("/search", {
			templateUrl : "app/components/search/search.html",
			controller : "SearchController"
		}).otherwise({
			redirectTo : "/search"
		});
	});

}());