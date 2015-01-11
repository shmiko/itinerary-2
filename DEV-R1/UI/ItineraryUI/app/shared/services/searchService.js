/**
 * Created by sandesh on 11/1/2015.
 */


(function () {

    var searchService = function () {
        var searchFormData = {
            journeyStart: "Mumbai",
            journeyEnd: "Delhi",
            destinations: [{code: "1", desc: "Shimla"}, {code: "2", desc: "Kullu"}, {code: "3", desc: "Manali"}],
            startDate: "",
            endDate: ""
        };
        var getSearchFormData = function () {
            return searchFormData;
        };

        var setSearchFormData = function (searchFormData) {
            searchFormData : searchFormData;
        };

        return {
            getSearchFormData: getSearchFormData,
            setSearchFormData: setSearchFormData
        };

    };
    var app = angular.module("itinerary");
    app.factory("searchService", searchService);


}());

