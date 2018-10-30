angular.module('app.controllers', [])
  
.controller('pageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

    $scope.mdl = {};

}])
   
.controller('page2Ctrl', ['$scope', '$stateParams', '$http',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http) {

    
symbol = $stateParams.symbol;
    
        
console.log("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + symbol + "&apikey=EBWBEXGMW1NBV3VY");
                          
url = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + symbol + "&apikey=EBWBEXGMW1NBV3VY"
    
    

    
    $http.get(url).then(function(response) {
		
        $scope.symbol= response.data["Global Quote"] ["01. symbol"];
        $scope.price= response.data["Global Quote"] ["05. price"];
        $scope.previous= response.data["Global Quote"] ["08. previous close"];
		
		if($scope.previous > $scope.price){
            $scope.difference = $scope.price - $scope.previous;
            $scope.vinkki = "Sell it fast!";
            $scope.vari = "red"
        }
        
        else{
            $scope.vinkki = "You should hold on to it!";
            $scope.difference = $scope.price - $scope.previous;
        }
        
		}, function(error) {
			alert("unable to retrieve company");
		});

}])
 