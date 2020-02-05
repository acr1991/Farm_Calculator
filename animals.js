class Animals {
  constructor(age) {
    this.age = age;
  }
  getValueInEuros() {
    return this.getWeightInKg() * this.price;
  }
}
//Pig
class Pig extends Animals {
  constructor(age) {
    super(age);
    this.price = 4;
  }

  getWeightInKg() {
    return Math.min(700, this.age * 2.3);
  }
}
//Cow
class Cow extends Animals {
  constructor(age) {
    super(age);
    this.price = 5;
  }
  getWeightInKg() {
    return Math.min(1200, this.age * 1.5);
  }
}
//Horse
class Horse extends Animals {
  constructor(age) {
    super(age);
    this.price = 10;
  }

  getWeightInKg() {
    return Math.min(1000, this.age * 1.7);
  }
}

module.exports = { Animals, Pig, Cow, Horse };
