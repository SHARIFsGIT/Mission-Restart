// Callback Functions in JavaScript

console.log('=== What is a Callback? ===\n');
console.log('A callback is a function passed as an argument to another function\n');

// Example 1: Simple callback
function greet(name, callback) {
  console.log('Hello ' + name);
  callback();
}

function sayGoodbye() {
  console.log('Goodbye!\n');
}

console.log('Example 1: Simple callback');
greet('Alice', sayGoodbye);


// Example 2: Inline callback
console.log('Example 2: Inline callback');
greet('Bob', function() {
  console.log('See you later!\n');
});


// Example 3: Arrow function callback
console.log('Example 3: Arrow function callback');
greet('Charlie', () => {
  console.log('Bye!\n');
});


// Example 4: Callback with parameters
function calculate(a, b, operation) {
  const result = operation(a, b);
  console.log('Result: ' + result);
}

console.log('Example 4: Callback with parameters');
calculate(5, 3, function(x, y) {
  return x + y;
});

calculate(10, 2, (x, y) => x * y);
console.log();


// Example 5: Array methods use callbacks
console.log('Example 5: Array methods (forEach, map, filter)');

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(num) {
  console.log('Number: ' + num);
});

console.log();

const doubled = numbers.map(num => num * 2);
console.log('Doubled:', doubled);

const evens = numbers.filter(num => num % 2 === 0);
console.log('Evens:', evens);
console.log();


// Example 6: Asynchronous callbacks (setTimeout)
console.log('Example 6: Async callback (setTimeout)');
console.log('Starting...');

setTimeout(function() {
  console.log('This runs after 1 second');
}, 1000);

setTimeout(() => {
  console.log('This runs after 2 seconds');
}, 2000);

console.log('Not waiting for timeouts!\n');


// Example 7: Real-world example - processing users
console.log('Example 7: Processing data');

const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];

function processUsers(userList, callback) {
  userList.forEach(callback);
}

processUsers(users, function(user) {
  console.log(user.name + ' is ' + user.age + ' years old');
});

console.log();


// Summary
console.log('=== Summary ===');
console.log('• Callbacks are functions passed to other functions');
console.log('• They allow you to run code after something completes');
console.log('• Common in: array methods, event handlers, async operations');
console.log('• Can be: named functions, anonymous functions, or arrow functions');