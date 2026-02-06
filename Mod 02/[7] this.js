// Example 1: 'this' in an object method
const person = {
  name: "Alice",
  age: 25,
  greet: function() {
    console.log("Hi, I'm " + this.name); // 'this' refers to the person object
  }
};

person.greet(); // Output: "Hi, I'm Alice"

// Example 2: 'this' in a regular function
function showThis() {
  console.log(this); // In browsers, 'this' refers to the window object
}

showThis();

// Example 3: 'this' with arrow functions
const car = {
  brand: "Toyota",
  regular: function() {
    console.log(this.brand); // "Toyota"
  },
  arrow: () => {
    console.log(this.brand); // undefined (arrow functions don't have their own 'this')
  }
};

car.regular(); // "Toyota"
car.arrow();   // undefined