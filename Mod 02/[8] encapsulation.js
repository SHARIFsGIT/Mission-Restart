// Encapsulation in JavaScript involves bundling data (properties) and methods that operate on that data within a single unit (like a class or object), and restricting direct access to some of the object's components. This is typically achieved using private properties (via closures or symbols) and public methods to interact with those private properties.

// Example of encapsulation using a class
class BankAccount {
  #balance; // Private property
    constructor(initialBalance) {
        this.#balance = initialBalance; // Initialize the private balance property
    }
    // Public method to deposit money
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount; // Update the private balance property
            console.log(`Deposited: $${amount}. New Balance: $${this.#balance}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }
    // Public method to withdraw money
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount; // Update the private balance property
            console.log(`Withdrew: $${amount}. New Balance: $${this.#balance}`);
        } else {
            console.log("Invalid withdrawal amount.");
        }
    }
    // Public method to check the balance
    getBalance() {
        return this.#balance; // Access the private balance property
    }
}

// Example usage
const myAccount = new BankAccount(1000);
myAccount.deposit(500); // Deposited: $500. New Balance: $1500
myAccount.withdraw(200); // Withdrew: $200. New Balance: $1300
console.log(`Current Balance: $${myAccount.getBalance()}`); // Current Balance: $1300

// Attempting to access the private property directly will result in an error
// console.log(myAccount.#balance); // SyntaxError: Private field '#balance' must be declared in an enclosing class 

// Example of encapsulation using closures
function createCounter() {
    let count = 0; // Private variable
    return {
        increment() {
            count++;
            console.log(`Count: ${count}`);
        },
        decrement() {
            count--;
            console.log(`Count: ${count}`);
        },
        getCount() {
            return count; // Access the private variable
        }
    };
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.decrement();
console.log(`Current Count: ${counter.getCount()}`); // Current Count: 1
// Attempting to access the private variable directly will result in an error
// console.log(counter.count); // undefined (count is not accessible outside the closure)