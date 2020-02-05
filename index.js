const { Animals, Pig, Horse, Cow } = require("./animals.js");
class Farm {
  constructor() {
    this.name = name;
    this.crops = [];
    this.animals = [];
  }

  addCrop(crop) {
    this.crops.push(crop);
  }

  calculateIncome() {
    const cropValue = this.crops
      .map(crop => crop.getYieldInEuros())
      .reduce((a, b) => a + b, 0);

    const animalValue = this.animals
      .map(animal => animal.getValueInEuros())
      .reduce((a, b) => a + b, 0);
    return cropValue + animalValue;
  }

  addAnimal(animal) {
    return this.animals.push(animal);
  }
}
module.exports.Farm = Farm;
