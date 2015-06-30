require('angular');

module.exports = angular.module('about', [])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/about', {
			templateUrl: 'sections/about/about.tpl.html'
		});
	}])
	.directive('aboutDirective', require('./about.directive'));