require('angular');

module.exports = angular.module('auth', [])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/login', {
			controller: 'LoginCtrl',
			controllerAs: 'loginCtrl',
			templateUrl: 'app/sections/auth/login/login.tpl.html'
		});
	}]) 
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/signup', {
			controller: 'SignupCtrl',
			controllerAs: 'signupCtrl',
			templateUrl: 'app/sections/auth/signup/signup.tpl.html'
		});
	}])
	.controller('LoginCtrl', require('./login/login.ctrl'))
	.controller('SignupCtrl', require('./signup/signup.ctrl'))
	.service('SessionServ', require('./session.serv'))
	.service('AuthServ', require('./auth.serv'))
	.directive('loginForm', require('./components/login/login.directive'))
	.directive('signupForm', require('./components/signup/signup.directive'));