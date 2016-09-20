function BMICalculator(){
};

BMICalculator.prototype.woman_bmi = function(obj) {
  var distance = obj.distance;
  var age = obj.age;
  if (distance > 0 && age > 0) {
    var finalBmi = distance / (age / 100 * age / 100);
    obj.bmiValue =  parseFloat(finalBmi.toFixed(2));
    setBMIMessage(obj);
  }
};

BMICalculator.prototype.man_bmi = function(obj) {
  var distance = obj.distance;
  var age = obj.age;
  if (distance > 0 && age > 0) {
    var finalBmi = (distance * 703 ) / (age * age);
    obj.bmiValue =  parseFloat(finalBmi.toFixed(2));
    setBMIMessage(obj);
  }
};
function setBMIMessage (obj, value){
  if (obj.bmiValue < 18.5) {
    obj.bmiMessage = "Underweight"
  }
  if (obj.bmiValue > 18.5 && obj.bmiValue < 25) {
    obj.bmiMessage = "Normal"
  }
  if (obj.bmiValue > 25 && obj.bmiValue < 30) {
    obj.bmiMessage = "Overweight"
  }
  if (obj.bmiValue > 30) {
    obj.bmiMessage = "Obese"
  }
}
