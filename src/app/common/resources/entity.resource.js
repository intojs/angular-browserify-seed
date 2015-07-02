/**
 *	entity.resource.js - EntityResource
 */

'use strict';
    
module.exports = ['$resource', 'ApiService', function ($resource, ApiService) {

    return $resource(ApiService.getUrl('entity')+'/:id', {
        id: '@id'
    },{ 
        getEntities: {
            method: 'GET',
            url: ApiService.getUrl('entity'),
            isArray: true
        }
	});
}];