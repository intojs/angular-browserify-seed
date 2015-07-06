module.exports = function () {
	return {
		restrict: 'E',
		scope: {
		},
		templateUrl: 'app/sections/auth/components/login/login.tpl.html',
		controller: ['$scope', '$location', function($scope, $location) {
			
			$scope.fields = {};

			$scope.formSubmit = function (form) {

				if (form.$invalid) return;

				$location.path('/dashboard')
			};
		}]
	};
}