myApp.controller('Submit',['$scope',function($scope){
$scope.task="";
$scope.tasks=[];
$scope.submit=function(){
  $scope.tasks.push({task:$scope.task,key:Math.random().toString()})
  $scope.task=""
}
$scope.removeItem=function(task){
$scope.tasks= $scope.tasks.filter(function(a){
  if(a.task!=task){
    return a;
  }
})
}
}]);