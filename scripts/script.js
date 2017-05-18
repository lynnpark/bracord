console.log("hey");

var app = angular.module('brapp', []);

app.controller('ctrlr', [
	'$scope',
	function($scope){
		$scope.bras = ["VS", "Pink"];
	}
]);


$.ajax({
	type: 'POST',
	url: 'http://localhost:3000/',
	datatype: 'json',
	success: function(result) {
		console.log(result);
	},
	error: function(result) {
		console.log(status);
		console.log(result);
	}
});