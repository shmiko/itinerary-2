/**
 * Created by sandesh on 11/1/2015.
 */
(function () {

    var searchService = function () {
        var searchFormData = {
            journeyStart: "Mumbai",
            journeyEnd: "Delhi",
            destinations: [{code: "1", desc: "Shimla"}, {code: "2", desc: "Kullu"}, {code: "3", desc: "Manali"}],
            startDate: "2015-01-01",
            endDate: "2015-01-11"
        };
        var getSearchFormData = function () {
            return searchFormData;
        };

        /*Input name cannot be same as the  data given in the factory,
         somehow the setter doesnt work in that case*/
        var setSearchFormData = function (searchData) {
            searchFormData = searchData;
            console.log(searchFormData);
        };

        return {
            getSearchFormData: getSearchFormData,
            setSearchFormData: setSearchFormData
        };

    };
    var app = angular.module("itinerary");
    app.factory("searchService", searchService);


}());

