module.exports = ['$sessionStorage', function($sessionStorage) {

	var isAuthenticated = function() {
		return false;
	};

	return {
		'isAuthenticated': isAuthenticated	
	};
}];