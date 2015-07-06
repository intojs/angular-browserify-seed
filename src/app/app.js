'use strict';

require('jquery');

require('angular');

require('ngstorage');

angular.module('app',  [
	'ngStorage',
	require('angular-route'),
	require('angular-resource'),
	require('angular-messages'),
	require('./templates').name,
	require('./common').name,
	require('./sections/about').name,
	require('./sections/auth').name,
	require('./sections/dashboard').name,
	require('./sections/home').name
])
.controller('AppCtrl', require('./app.ctrl'));