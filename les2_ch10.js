// let smallCar = {
//   fuel: 7.9,
//   mpg: 37,
//   range() {
//     return this.fuel * this.mpg; 
//   }
// };

// let largeCar = {
//   fuel: 9.4,
//   mpg: 29,
// };

// let truck = {
//   fuel: 14.4,
//   mpg: 23,
// };

// function vehicleRange(vehicle) {
//   return vehicle.fuel * vehicle.mpg; 
// }

// console.log(vehicleRange(smallCar));
// console.log(vehicleRange(largeCar));
// console.log(vehicleRange(truck));


function makeVehicle(fuel, mpg) {
  return {
    fuel,
    mpg,
    range() {
      return this.fuel * this.mpg; 
    }
  };
}

let smallCar = makeVehicle(7.9, 37);
let largeCar = makeVehicle(9.4, 29);
let truck = makeVehicle(14.4, 23);

console.log(truck.range());
