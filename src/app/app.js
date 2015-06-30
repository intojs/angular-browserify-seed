'use strict';

require('jquery');

require('angular');

angular.module('app',  [
	require('angular-route'),
	require('./templates').name,
	require('./sections/home').name,
	require('./sections/about').name
]);