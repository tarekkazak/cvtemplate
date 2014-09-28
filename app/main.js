/**
 * Created by tarekkazak on 2014-04-07.
 */
requirejs.config({
    paths: {
        angular: '../bower_components/angular/angular.min',
        //angularRoute : '../bower_components/angular-route/angular-route',
        lodash: '../bower_components/lodash/dist/lodash.min'
    },
    //urlArgs : 'd=' + (new Date()).getTime(),
    shim: {
        'angular' : {
            exports : 'angular'
        },
        'lodash': {
            exports : '_'
        }

    }
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = "NG_DEFER_BOOTSTRAP!";

require( [
    'angular',
    'app'
], function(angular, app) {
    'use strict';
    angular.bootstrap(document, [app['name']]);
    angular.element(document).ready(function() {
        angular.resumeBootstrap([app['name']]);
    });
});