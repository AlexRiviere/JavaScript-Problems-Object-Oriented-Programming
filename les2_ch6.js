function increment(thing) {
  thing.count += 1;
  console.log(thing.count);
}

var counter = { count: 0 };
console.log(counter);
increment(counter);
console.log(counter);