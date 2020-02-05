//Crop
class Crop {
  constructor(acres) {
    this.acres = acres;
  }
  getYieldInEuros() {
    return this.getYieldInKg() * this.price;
  }
}

//Wheat
class Wheat extends Crop {
  constructor(acres) {
    super(acres);
    this.price = 1.5;
  }

  getYieldInKg() {
    return Math.pow(this.acres * 1.5, 1.3);
  }
}

//Sugarcane
class Sugarcane extends Crop {
  constructor(acres) {
    super(acres);
    this.price = 2;
  }
  getYieldInKg() {
    return Math.pow(this.acres * 2.6, 1.1);
  }
}
module.exports = { Crop, Sugarcane, Wheat };
//console.log(Crop);
//console.log(Sugarcane);
//console.log(Wheat);
