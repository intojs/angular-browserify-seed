require('angular');

module.exports = angular.module('dashboard', [])
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/dashboard', {
			controller: 'DashboardCtrl',
			controllerAs: 'dashboardCtrl',
			templateUrl: 'app/sections/dashboard/dashboard.tpl.html'
		});
	}]) 
	.controller('DashboardCtrl', require('./dashboard.ctrl'));