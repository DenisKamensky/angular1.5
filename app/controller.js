app.controller('SimpleCtrl',['$scope',function($scope){
	$scope.population = 7000;
	$scope.countries= [
	{
		name: 'France',
		population: 63.1
	},{
		name: 'United Kindom',
		population: 61.8
	}
	]; 
	$scope.worldPer = function(countryPopulation){
		return (countryPopulation/$scope.population)*100;
	}
}]);
app.controller('TextCtrl',['$scope',function($scope){
	$scope.message = '';
	$scope.remeaning = function(){
		var remeain = 100 - $scope.message.length;
		return remeain;
	}; 
	$scope.condition = function(){
		return $scope.remeaning()>=0;
	}
	$scope.valid = function(){
		return $scope.remeaning()<0;
	}
	$scope.switchClass = function(){
		return $scope.remeaning()<11&& $scope.remeaning()> -1
	};
	$scope.clear = function(){
		return $scope.message = '';
	} 
}])