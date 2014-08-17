/**
 * Created by tarekkazak on 2014-05-15.
 */
define(['angular'], function(angular) {

    var appService = angular.module('dataService', []);
    appService.factory('DataService', ['$http', function($http) {
        return {
            get : function (callback) {
                    $http.get('data/content.json?d=' + new Date().getTime()).success(callback);
            },
            save : function(data) {
                $http.post('php/persistence.php', data).
                    success(function (data) {
                        console.log('saved');
                        alert('saved');
                    }).
                    error(function (data) {
                        console.log('not saved');
                        alert('NOOOOOOT saved');
                    });
            }

        };
    }]);

});