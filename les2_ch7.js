// let message = 'Hello from the global scope!';

// function func(message) {
//   message = 'Hello from the function scope!';
//   console.log(message);
// }

// func(message);
// console.log(message);

// // This will log 'Hello from the function scope!'. Then 'Hello from the global scope!'. The global variable `message` was passed in to  func, then the argument was reassigned, printed but that didn't affect the `message` in the outer scope. 



// // 2
// let myObj = { message: 'Greetings from the global scope!' };

// function func(obj) {
//   obj.message = 'Greetings from the function scope!';
//   console.log(obj.message);
// }

// func(myObj);

// console.log(myObj.message);

// // we reassign the property of the `myObj` function so this will log 'Greetings from the fucntion scope!' twice. 


// 3

// let message = 'Hello from the global scope!';

// function func() {
//   message = 'Hello from the function scope!';
//   console.log(message);
// }

// func();
// console.log(message);

// // here we reassign a global variable, this will log function scope twice



// 4

// let a = 10;
// let obj = {
//   a
// }

// // obj = {a: 20 } // a references 10

// let newObj = obj; // reference
// newObj.a += 10; // changes `obj` but not `a`
// // newObj = { a: 20 }
// console.log(obj.a === a); // false
// console.log(newObj.a === obj.a); // true

// 


// 5

let animal = { // initialized
  name: 'Pumbaa',
  species: 'Phacochoerus africanus',
};

let menagerie = { // initialized
  warthog: animal, // reference animal, still references pumba
};

animal = { // animal is reassigned
  name: 'Timon',
  species: 'Suricata suricatta',
};

menagerie.meerkat = animal; // meerkat references timon, which is now animal

menagerie.warthog === animal; // false
menagerie.meerkat === animal; // true


//Because we reassigned animal to a new object, we did not mutate it