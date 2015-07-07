/**
 *	login.ser.js
 */
module.exports = ['$http', 'ApiServ', function($http, ApiServ) {
	
	var login = function (email, password) {
		return $http({
			'method': 'POST',
			'url': ApiServ.getUrl('login'),
			'data': {
				'email': email,
				'password': password
			}
		});
	};

	var signup = function () {

	};

	var logout = function () {

	};

	return {
		login: login,
		signup: signup,
		logout: logout
	}
}];