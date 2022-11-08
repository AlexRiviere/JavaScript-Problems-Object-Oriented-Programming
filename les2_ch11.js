function createProduct(id, name, stock, price) {
  return {
    id,
    name,
    stock,
    price,
    describe() {
      console.log(`=> Name: ${this.name[0].toUpperCase() + this.name.slice(1)}`);
      console.log(`=> ID: ${this.id}`);
      console.log(`=> Price: $${this.price}`);
      console.log(`=> Stock: ${this.stock}`);
    },
    
    setPrice(newPrice) {
      if (newPrice < 0) return 'price is invalid';
      this.price = newPrice;
    },
  };
}

let scissors = createProduct(0, 'Scissors', 8, 10);
let drill = createProduct(1, 'Cordless Drill', 14, 45);
let mat = createProduct(2, 'Mat', 10, 9)

// let scissors = {
//   id: 0,
//   name: 'Scissors',
//   stock: 8,
//   price: 10,
//   describe() {
//     console.log(`=> Name: ${this.name[0].toUpperCase() + this.name.slice(1)}`);
//     console.log(`=> ID: ${this.id}`);
//     console.log(`=> Price: $${this.price}`);
//     console.log(`=> Stock: ${this.stock}`);
//   },
  
//   setPrice(newPrice) {
//     if (newPrice < 0) return 'price is invalid';
//     this.price = newPrice;
//   },
// }

// let drill = {
//   id: 1,
//   name: 'Cordless Drill',
//   stock: 15,
//   price: 45,
  
//   describe() {
//     console.log(`=> Name: ${this.name[0].toUpperCase() + this.name.slice(1)}`);
//     console.log(`=> ID: ${this.id}`);
//     console.log(`=> Price: $${this.price}`);
//     console.log(`=> Stock: ${this.stock}`);
//   },
  
//   setPrice(newPrice) {
//     if (newPrice < 0) return 'price is invalid';
//     this.price = newPrice;
//   },
// }

scissors.describe();

drill.setPrice(2);
drill.describe();



// let drillId = 1;
// let drillName = 'Cordless Drill';
// let drillStock = 15;
// let drillPrice = 45;

// function setPrice(product, newPrice) {
//   if (newPrice < 0) return 'price is invalid';
//   product.price = newPrice;
// }

// function describeProduct(product) {
//   console.log(`=> Name: ${product.name[0].toUpperCase() + product.name.slice(1)}`);
//   console.log(`=> ID: ${product.id}`);
//   console.log(`=> Price: $${product.price}`);
//   console.log(`=> Stock: ${product.stock}`);
// }

// setPrice(scissors, 7);
// console.log(scissors);
// console.log(setPrice(drill, -10));
// console.log(drill);

