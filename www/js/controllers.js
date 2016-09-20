angular.module('starter.controllers', [])


.controller('BmiController', function($scope) {
  $scope.data = {};
  $scope.calculateBMI = function() {
    var person = new Person({
      weight: $scope.data.weight,
      height: $scope.data.height
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
