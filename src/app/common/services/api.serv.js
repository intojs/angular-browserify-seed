/**
 * 	api.serv.js
 */

'use strict';

module.exports = function () {

	this.hostName = 'http://localhost:3000/ngApp';

	this.urls = {
		'entity': this.hostName+'/entity'
	};

	this.getUrl = function (url) {
		return this.urls[url];
	};
};