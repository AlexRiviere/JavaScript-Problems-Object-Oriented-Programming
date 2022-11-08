// let sedan = {
//   speed: 0,
//   rate: 8,
  
//   accelerate() {
//     this.speed += this.rate;
//   },
// }

// console.log(sedan);
// sedan.accelerate();
// console.log(sedan);

// 1

function makeCar(accelRate, brakeRate) {
  return {
    speed: 0,
    accelRate,
    brakeRate,
    
    accelerate() {
      this.speed += this.accelRate;
    },
    
    brake() {
      this.speed -= this.brakeRate;
      this.speed = this.speed < 0 ? 0 : this.speed;
    },
  };
}

let sedan = makeCar(8, 6);
sedan.accelerate();
console.log(sedan.speed);
// = 8
sedan.brake();
console.log(sedan.speed);
sedan.brake();
console.log(sedan.speed);


// let coupe = makeCar(12);
// coupe.accelerate();
// console.log(coupe.speed);
// // = 12

// let hatchback = makeCar(9);
// console.log(hatchback);