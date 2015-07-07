/**
 *	entity.resource.js - EntityResource
 */

'use strict';
    
module.exports = ['$resource', 'ApiServ', function ($resource, ApiServ) {

    return $resource(ApiServ.getUrl('entity')+'/:id', {
        id: '@id'
    },{ 
        getEntities: {
            method: 'GET',
            url: ApiServ.getUrl('entity'),
            isArray: true
        }
	});
}];