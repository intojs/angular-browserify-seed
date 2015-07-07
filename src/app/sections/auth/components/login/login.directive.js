module.exports = function () {
	return {
		restrict: 'E',
		scope: { 
		},
		templateUrl: 'app/sections/auth/components/login/login.tpl.html',
		controller: ['$scope', '$location', 'AuthServ', function($scope, $location, AuthServ) {
			
			$scope.fields = {};

			$scope.formSubmit = function (form) {

				if (form.$invalid) return;

				AuthServ.login($scope.fields.email, $scope.fields.password).then(function(onFulfilled){
					console.log(onFulfilled);
					// $location.path('/dashboard')
				}, function(onRejectedd) {
					console.log(onRejectedd);
				});
			};
		}]
	};
}