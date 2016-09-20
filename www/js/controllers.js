angular.module('starter.controllers', [])


.controller('BmiController', function($scope) {
  $scope.data = {};
  $scope.calculateBMI = function() {
    var person = new Person({
      distance: $scope.data.distance,
      age: $scope.data.age
    });
    var selectObject = document.getElementById('woman_radio');
    if (selectObject.checked) {
       person.calculate_bmi_woman();
    } else {
      person.calculate_bmi_man();
    }
    $scope.person = person;
  };
})

.controller('AboutController', function () {

});
