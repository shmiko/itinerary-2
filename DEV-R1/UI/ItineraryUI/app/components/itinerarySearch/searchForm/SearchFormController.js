(function () {
    var app = angular.module("itinerary");

    var SearchFormController = function ($scope, $location, searchService) {

        /*Initialize form data for this scope from data model.*/
        $scope.searchFormData = searchService.getSearchFormData();

        /*Push the data from form to the data model and then redirect to search results page*/
        $scope.searchItineraries = function () {
            searchService.setSearchFormData($scope.searchFormData);
            $location.path("/searchGrid/");
        };

        /*Add a new destination to the list of already provided destinations in the data model.*/
        $scope.addDestination = function () {
            if ($scope.searchFormData.addedDestination != undefined && $scope.searchFormData.addedDestination.trim() != "") {
                var newDestination = {
                    code: $scope.searchFormData.addedDestination,
                    desc: $scope.searchFormData.addedDestination
                };
                searchService.addDestination(newDestination);
                $scope.searchFormData.addedDestination = undefined;
            }
        };

        /*Remove all the selected destinations from the data model*/
        $scope.removeDestinations = function () {
            searchService.removeDestinations($scope.searchFormData.selectedDestinations);
        };
    };

    app.controller("SearchFormController", SearchFormController);
}());