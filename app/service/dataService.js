
    var appService = angular.module('dataService', []);
    appService.factory('DataService', ['$http', function($http) {
        return {
            get : function (callback) {
                    $http.get('data/content.json').success(callback);
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

