'use strict';

var app = angular.module('mushrooms', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'partials/mushroom-list.html',
        controller: 'mushroomFactory'
    }).otherwise('/');
});