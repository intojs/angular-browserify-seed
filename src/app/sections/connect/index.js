require('angular');

module.exports = angular.module('connect', [])
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/connect', {
			controller: 'ConnectCtrl',
			controllerAs: 'connectCtrl',
			templateUrl: 'app/sections/connect/connect.tpl.html'
		});
	}])
	.controller('ConnectCtrl', require('./connect.ctrl'));