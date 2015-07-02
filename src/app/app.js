'use strict';

require('jquery');

require('angular');

angular.module('app',  [
	require('angular-route'),
	require('angular-resource'),
	require('./templates').name,
	require('./common').name,
	require('./sections/about').name,
	require('./sections/auth').name,
	require('./sections/connect').name,
	require('./sections/home').name
])
.controller('AppCtrl', require('./app.ctrl'));