
define([
    'angular',
    'angularRoute',
    'controller/controller',
    'service/dataService'
], function (angular, angularRoute, controller) {

// Declare app level module which depends on filters, and services

    var budgetApp = angular.module('cvApp', [
        'dataService', 'ngRoute'
    ]);

    budgetApp.controller('controller', ['$scope', 'DataService',
        controller]);
    budgetApp.config(function($routeProvider) {
        $routeProvider
            .when('/ikram', {
                templateUrl: 'partials/ikram-cv.html'
            })
            .when('/tarek', {
                templateUrl: 'partials/tarek-cv.html'
            });

    });
    return budgetApp;
});

