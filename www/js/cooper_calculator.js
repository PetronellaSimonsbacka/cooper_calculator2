function CooperCalculator(){
};

CooperCalculator.prototype.woman_cooper = function(obj) {
  var distance = obj.distance;
  var age = obj.age;
  if (distance > 0 && age > 0) {
    var finalCooper = distance / (age / 100 * age / 100);
    obj.cooperValue =  parseFloat(finalCooper.toFixed(2));
    setCooperMessage(obj);
  }
};

BMICalculator.prototype.man_cooper = function(obj) {
  var distance = obj.distance;
  var age = obj.age;
  if (distance > 0 && age > 0) {
    var finalCooper = (distance * 703 ) / (age * age);
    obj.cooperValue =  parseFloat(finalCooper.toFixed(2));
    setCooperMessage(obj);
  }
};
function setCooperMessage (obj, value){
  if (obj.cooperValue < 18.5) {
    obj.bmiMessage = "Underweight"
  }
  if (obj.cooperValue > 18.5 && obj.bmiValue < 25) {
    obj.bmiMessage = "Normal"
  }
  if (obj.cooperValue > 25 && obj.bmiValue < 30) {
    obj.bmiMessage = "Overweight"
  }
  if (obj.cooperValue > 30) {
    obj.bmiMessage = "Obese"
  }
}
