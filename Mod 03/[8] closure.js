// Closures in JavaScript

console.log('=== What is a Closure? ===');
console.log('A closure is when a function remembers variables from its outer scope\n');


// Example 1: Basic Closure
console.log('Example 1: Basic Closure\n');

function outer() {
  let count = 0; // This variable is "closed over"
  
  function inner() {
    count++;
    console.log('Count:', count);
  }
  
  return inner;
}

const counter = outer();
counter(); // Count: 1
counter(); // Count: 2
counter(); // Count: 3
console.log();


// Example 2: Private Variables
console.log('Example 2: Private Variables\n');

function createBankAccount(initialBalance) {
  let balance = initialBalance; // Private variable
  
  return {
    deposit: function(amount) {
      balance += amount;
      console.log('Deposited:', amount, '| Balance:', balance);
    },
    withdraw: function(amount) {
      balance -= amount;
      console.log('Withdrew:', amount, '| Balance:', balance);
    },
    getBalance: function() {
      return balance;
    }
  };
}

const myAccount = createBankAccount(100);
myAccount.deposit(50);
myAccount.withdraw(30);
console.log('Current balance:', myAccount.getBalance());
// console.log(myAccount.balance); // undefined - can't access directly!
console.log();


// Example 3: Function Factory
console.log('Example 3: Function Factory\n');

function makeMultiplier(multiplier) {
  return function(number) {
    return number * multiplier;
  };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log('double(5):', double(5));   // 10
console.log('triple(5):', triple(5));   // 15
console.log();