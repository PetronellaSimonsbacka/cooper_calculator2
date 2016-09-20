function Person(attr) {
  this.distance = attr.distance;
  this.age = attr.age;
};

Person.prototype.calculate_bmi_woman = function() {
  calculator = new BMICalculator();
  calculator.woman_bmi(this);
};

Person.prototype.calculate_bmi_man = function() {
  calculator = new BMICalculator();
  calculator.man_bmi(this);
};
