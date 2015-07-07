module.exports = angular.module('common', [])
	.factory('EntityResource', require('./resources/entity.resource'))
	.service('ApiServ', require('./services/api.serv'))
	.service('LangService', require('./services/lang.serv'));