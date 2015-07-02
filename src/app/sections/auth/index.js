require('angular');

module.exports = angular.module('auth', [])
	.directive('loginForm', require('./components/login/login.directive'))
	.directive('signupForm', require('./components/signup/signup.directive'));