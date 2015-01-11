(function () {
    var app = angular.module("itinerary");

    var SearchController = function ($scope, $location, searchService) {

        $scope.searchFormData = {
            journeyStart: searchService.getSearchFormData().journeyStart,
            journeyEnd: searchService.getSearchFormData().journeyEnd,
            destinations: searchService.getSearchFormData().destinations
        };

        $scope.search = function (searchFormData) {
            searchService.setSearchFormData(searchFormData);
            $location.path("/searchGrid/");
        };

    };

    app.controller("SearchController", SearchController);
}());