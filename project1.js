const Car = function (make, speed) {
    this.speed = speed;
    this.make = make;
  };
  Car.prototype.acclerate = function (speed) {
    speed = speed + 10;
    
    console.log(` ${this.make} is going at Speed of ${this.speed}`);
    console.log(this.speed);
  };
  
  Car.prototype.brake = function (speed) {
    speed = speed - 5;
    console.log(this.speed);
    console.log(` ${this.make} is slowed down at Speed of ${this.speed}`);
  };
  
  const Toyota = new Car("Toyota", "120km/h");
  const Hyundai = new Car("Hyundai", "95km/h");
  
  Toyota.acclerate()
  Hyundai.brake()
  