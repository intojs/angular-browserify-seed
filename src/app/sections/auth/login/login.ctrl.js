module.exports = ['$location', function($location) {

	this.signup = function() {
		$location.path('/signup');
	}
}];