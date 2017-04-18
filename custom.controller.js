
(function () {
var app = angular.module('customModule', []);
app.controller('TaskController', ['$scope', function ($scope) {

  $scope.tasks = [
    {
      name: 'Č not translated',
      translated: 'translated č'
    },
    {
      name: 'Ž not translated',
      translated: 'translated ž'
    },
    {
      name: 'Š not translated',
      translated: 'translated š'
    },
    {
      name: 'Đ not translated',
      translated: 'translated đ'
    }
  ];
}])
}());
