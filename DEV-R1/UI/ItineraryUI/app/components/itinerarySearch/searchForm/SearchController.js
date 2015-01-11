(function () {
    var app = angular.module("itinerary");

    var SearchController = function ($scope, $location, searchService) {

        //Initialize form data for this scope once the form
        $scope.searchFormData = searchService.getSearchFormData();

        $scope.search = function () {
            searchService.setSearchFormData($scope.searchFormData);
            $location.path("/searchGrid/");
        };

    };

    app.controller("SearchController", SearchController);
}());