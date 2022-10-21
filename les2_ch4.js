let me = {
 firstName: 'Alex',
 lastName: 'Riviere',
};

function fullName(person) {
  console.log(person.firstName + ' ' + person.lastName);
}

// fullName(me);

let friend = {
  firstName: 'John',
  lastName: 'Smith',
}

// fullName(friend);

let mother = {
  firstName: 'Amber',
  lastName: 'Doe',
};

let father = {
  firstName: 'Nick',
  lastName: 'Riviere',
};

// fullName(mother);
// fullName(father);

// let people = [];

// people.push(me);
// people.push(friend);
// people.push(mother);
// people.push(father);

// function rollCall(collection) {
//   let length;
//   let i;
//   for (i = 0, length = collection.length; i < length; i += 1) {
//     fullName(collection[i]);
//   }
// }

// function rollCall(collection) {
//   collection.forEach(fullName);
// }

// rollCall(people);

let people = {
  collection: [],
  fullName: function(person) {
    console.log(person.firstName + ' ' + person.lastName);
  },
  
  rollCall: function() {
    this.collection.forEach(this.fullName);
  },
  
  index: 0,
  
  add: function(person) {
    if (this.isInvalidPerson(person)) {
      return ; 
    }
    person.index = this.index;
    this.index += 1;
    
    this.collection.push(person);
  },
  
  getIndex: function(person) {
    let index = -1;
    this.collection.forEach(function(comparator, i) {
      if (comparator.firstName === person.firstName &&
          comparator.lastName === person.lastName) {
        index = i;     
          }
    });
    
    return index;
  },
  
  remove: function(person) {
    let index = this.getIndex(person);
    if (this.isInvalidPerson(person)) {
      return;  
    }
    
    if (index === -1) {
      return; 
    }
    
    this.collection.splice(index, 1);
  },
  
  isInvalidPerson: function(person) {
    return typeof person.firstName !== 'string' || typeof person.lastName !== 'string';
  },
  
  get: function(person) {
    if (this.isInvalidPerson(person)) {
      return; 
    }
    
    return this.collection[this.getIndex(person)];
  },
  
  update: function(person) {
    if (this.isInvalidPerson(person)) {
      return; 
    }
    
    let existingPersonId = this.getIndex(person);
    if (existingPersonId === -1) {
      this.add(person); 
    } else {
      this.collection[existingPersonId] = person; 
    }
  }
};

people.add(me);
people.add(friend);
people.add(mother);
people.add(father);

console.log(people.collection[3]);