angular.module('starter.controllers', [])


.controller('CooperController', function($scope) {
  $scope.data = {};
  $scope.calculateCooper = function() {
    var person = new Person({
      distance: $scope.data.distance,
      age: $scope.data.age
    });
    var selectObject = document.getElementById('woman_radio');
    if (selectObject.checked) {
       person.calculate_cooper_woman();
    } else {
      person.calculate_cooper_man();
    }
    $scope.person = person;
  };
})

.controller('AboutController', function () {

});
