module.exports = angular.module('common', [])
	.factory('EntityResource', require('./resources/entity.resource'))
	.service('ApiService', require('./services/api.serv'))
	.service('LangService', require('./services/lang.serv'));