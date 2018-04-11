myApp.directive('todoItem', function () {
  return {
    restrict: 'EA',
    replace: true,
    templateUrl: 'templates/todo.html'
  }
})
