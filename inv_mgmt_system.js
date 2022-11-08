/*
- build inventory mgmt system
- has item creator, item manager, reports manager

item creator
- makes sure that all necessary information are present/valid

item manager
- creates items, updates info about items, deletes items, querying info about items

report manager 
- generates reports for a specific item or ALL items
- reports for specific items are generated from report objects created from the report manager
- responsible for reports for all items

required info for an item
- SKU code: first 3 letters of item name, first 2 letters of the category. if the item has 2 words and the first word has 2 letters, the next letter is taken from the second word
- item name: minimum 5 chars, spaces are not counted as chars
- category: minimum 5 chars, must be one word
- quantity: cannot be blank, assume a valid number will be provided

item manager methods
- create: creates a new item, returns false if creation is not successful
- udpate: accepts SKU code and an object as an argument, updates any information on an item. assume valid values will be provided
- delete: given an SKU code, deletes the item from the list. assume a valid SKU is provided
- items: property, contains list of all items
- inStock: method that lists all the items that have quantity > 0
- itemsInCategory: lists all items for a given category

reports manager
- init: accepts `ItemManager` object as an arg, assigns it to the `items` property
- items property???
- createReporter: accepts SKU code as an argument, returns an object with one method `itemInfo` which logs to the console all properties of an object as 'key:value' pairs. no other properties or methods on the returned object (except for properties inherited from Object.prototype)
- reportInStock: logs to the console the item names of all the items that are in stock as comma separated values

Notes
- each required piece of info for an items corresponds to one property (SKU, name, category, quantity)
- if any info is not valid, item creator returns an object with `notValid` property with value of `true`
- the created item objects should not have any methods/properties on them other than the required info above and those from Object.prototype
- can add methods to `ItemManager` as we deem necessary

Observations
- ItemManager is an object
- the item creator is a factory function: somehow lives inside the `ItemManager.create` method
- `ItemManager.create` creates the items then adds them to `items` list
- the items that `ItemManager` creates do not inherit from `ItemManager`
- ReportManager is a constructor function or a class (but I am seeing `init` which means we are using OLOO) so its an object prototype
- we pass in the `ItemManager`, which it assigns to the `items` property so that any mutation of `ItemManager` is reflected in the reports
- when we initialize `ReportManager` we don't save it anywhere, its like `init` just mutates this object
- new theory: these are all just regular objects except item createor which is a factory function

*/

function validCategoryName(category) {
  return category.length >= 5 && !/\s/.test(category); 
}

function validItemName(name) {
  let nameWithoutSpaces = name.replace(/\s+/, '');
  return nameWithoutSpaces.length >= 5;
}

let ItemCreator = function(name, category, quantity) {
  if (validItemName(name) && validCategoryName(category) && quantity !== undefined) {
    return {
      name,
      category,
      quantity,
      SKU: (name.replace(/\s+/, '').slice(0, 3) + category.slice(0, 2)).toUpperCase(),
    }; 
  } else {
    return { notValid: true }  
  }
}

let ItemManager = {
  items: [],
  
  create(name, category, quantity) {
    let returnedObj = ItemCreator(name, category, quantity);
    if (returnedObj.notValid) {
      return false;
    } else {
      this.items.push(returnedObj);
    }
  },
  
  update(SKU, objOfChanges) {
    let itemToBeChanged = this.items.find(function(item) {
      return item.SKU === SKU;
    });
    let propertiesToBeChanged = Object.keys(objOfChanges);
    propertiesToBeChanged.forEach(function(property) {
      itemToBeChanged[property] = objOfChanges[property];
    });
  },

  inStock() {
    return this.items.filter(function(item) {
      return item.quantity > 0;
    });
  },
  
  itemsInCategory(category) {
    return this.items.filter(function(item) {
      return item.category === category;
    });
  },
  
  delete(SKU) {
    let index = this.items.findIndex(function(item) {
      return item.SKU === SKU;
    });
    this.items.splice(index, 1);
  },
};

let ReportManager = {
  init(itemManager) {
    this.items = itemManager;
  },
  
  reportInStock() {
    let inStockItems = this.items.items.filter(function(item) {
      return item.quantity > 0;
    });
    let inStockNames = inStockItems.map(function(item) {
      return item.name;
    });
    
    console.log(inStockNames.join(', '));
  },
  
  createReporter(SKU) {
    let item = this.items.items.find(function(item) {
      return item.SKU === SKU;
    });
    return {
      itemInfo() {
        let keys = Object.keys(item);
        keys.forEach(function(key) {
          console.log(`${key} : ${item[key]}`)
        });
      },
    };
  },
};


ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item

ItemManager.items;
// returns list with the 4 valid items

ReportManager.init(ItemManager);
ReportManager.items;
ReportManager.reportInStock();
// // logs soccer ball,football,kitchen pot

ItemManager.update('SOCSP', { quantity: 0 });
ItemManager.inStock();
// // returns list with the item objects for football and kitchen pot
ReportManager.reportInStock();
// // logs football,kitchen pot
ItemManager.itemsInCategory('sports');
// // returns list with the item objects for basket ball, soccer ball, and football
ItemManager.delete('SOCSP');
console.log(ItemManager.items);
// // returns list with the remaining 3 valid items (soccer ball is removed from the list)

const kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 10


