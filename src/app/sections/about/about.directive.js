module.exports =  function() {
	return {
		restrict: 'E',
		scope: {},
		templateUrl: 'sections/about/about.directive.tpl.html',
		controller: ['$scope', function($scope) {
			$scope.about = 'Hola!';

			setTimeout(function() {

				$('#jquery-test').hide();
			}, 1000);
		}]
	};
}