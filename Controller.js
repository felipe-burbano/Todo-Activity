
var app = angular.module("TodoList",["LocalStorageModule"]);
  app.controller("TodoController",function($scope,$timeout,localStorageService){
    $scope.messageError = "";

    if(localStorageService.get("angular-todo-list")){
        $scope.todo = localStorageService.get("angular-todo-list");
    }else {
      $scope.todo = [];
    }

$scope.$watchCollection('todo',function(newValue,oldValue){
  localStorageService.set("angular-todo-list",$scope.todo)
});

  $scope.addActividad  = function(){

      $timeout(function () {
        alert("Tarea agregada con exito!");
         $scope.todo.push($scope.newActividad);
         $scope.newActividad = {};
       }, 1000);

  }


});
