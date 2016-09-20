function Person(attr) {
  this.weight = attr.weight;
  this.height = attr.height;
};

Person.prototype.calculate_bmi_woman = function() {
  calculator = new BMICalculator();
  calculator.woman_bmi(this);
};

Person.prototype.calculate_bmi_man = function() {
  calculator = new BMICalculator();
  calculator.man_bmi(this);
};
