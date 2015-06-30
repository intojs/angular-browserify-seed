require('angular');

module.exports = angular.module('home', [])
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/', {
			controller: 'HomeCtrl',
			templateUrl: 'sections/home/home.tpl.html'
		});
	}])
	.controller('HomeCtrl', require('./homeCtrl'));