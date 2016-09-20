function Person(attr) {
  this.distance = attr.distance;
  this.age = attr.age;
};

Person.prototype.calculate_cooper_woman = function() {
  calculator = new CooperCalculator();
  calculator.woman_cooper(this);
};

Person.prototype.calculate_cooper_man = function() {
  calculator = new CooperCalculator();
  calculator.man_cooper(this);
};
