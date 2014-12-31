    var budgetApp = angular.module('cvApp', ['ngRoute',
        'dataService'
    ]);

    budgetApp.controller('controller', ['$scope', 'DataService',
        function ($scope, DataService) {
            var loadedData;
            $scope.angular = angular;
            DataService.get(function(data) {
                loadedData = data;
                $scope.content = loadedData.content.fr;
            });

            $scope.update = function(obj, prop, newval, index) {
                if(angular.isArray(obj)) {
                    obj[index] = newval;
                } else {
                    obj[prop] = newval;
                }
            };

            $scope.del = function (index, coll) {
                var currentItem = coll[index];
                _.remove(coll, function (item) {
                    return item === currentItem;
                });
            };

            $scope.add = function (coll, items) {
                var newObj = {};
                _.forEach(items, function (item) {
                    newObj[item.field] = item.value;
                });
                coll.push(newObj);
            };

            $scope.addItemToList = function (coll, item) {
                coll.push(item);
            };

            $scope.save = function () {
                DataService.save(loadedData);
            };

            $scope.loadBootstrap = function() {
                var head  = document.getElementsByTagName('head')[0];
                var link  = document.createElement('link');
                link.rel  = 'stylesheet';
                link.type = 'text/css';
                link.href = 'css/tarek.css';
                head.appendChild(link);
            };

        }]);
        budgetApp.config(function($routeProvider) {
            $routeProvider
                .when('/ikram', {
                    templateUrl: 'partials/ikram-cv.html'
                })
                .when('/tarek', {
                    templateUrl: 'partials/tarek-cv.html'
                });

        });

