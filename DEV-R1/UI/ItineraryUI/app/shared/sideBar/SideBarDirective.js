(function() {

	var app = angular.module("itinerary");

	var sideBarDirective = function() {
		return {
			restrict : 'E',
			templateUrl : 'app/shared/sideBar/sideBarView.html',
		};
	};

	app.directive('sideBar', sideBarDirective);

}());
