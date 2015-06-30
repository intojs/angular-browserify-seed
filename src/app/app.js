<<<<<<< HEAD
'use strict';

require('jquery');

require('angular');

angular.module('app',  [
	require('angular-route'),
	require('./templates').name,
	require('./sections/home').name,
	require('./sections/about').name
]);
=======
var country = require('./country/main.js');
var state = require('./state/main.js');
var angular = require('angular');

function hola() {
    return 'Hola!';
}

hola();
>>>>>>> 475b8389bf826edc79f5545029f17e4e59108c68
