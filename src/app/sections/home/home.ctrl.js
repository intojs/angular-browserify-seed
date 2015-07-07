// TODO - rename this module to entities, or listEntities

/**
 *	home.ctrl.js
 */
 
'use strict';

module.exports = ['$scope', '$location', 'EntityResource', 'SessionServ', function ($scope, $location, EntityResource, SessionServ) {

	/**
	 *	Get the entities.
	 */

	this.entities = undefined;

	this.handleSuccess = function (successResp) {
		this.entities = successResp;
	}.bind(this);

	this.handleError = function (errorResp) {
		alert('Could not load entities - home.ctrl.js')
	}.bind(this);

	/**
	 *	Connect to an entity.
	 */

	this.connectToEntity = function (entityId) {
	};

	this.viewEntityDetails = function (entityId) {
		$location.path('/details');
	};
 
	EntityResource.getEntities().$promise.then(this.handleSuccess, this.handleError);

	/**
	 *	Log into the application.
	 */

	this.login = function () {
		$location.path('/login');
	};
}];