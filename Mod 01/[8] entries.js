const employee = {
    name: "Alice Johnson",
    position: "Software Engineer",
    department: "Development",
    salary: 90000,
    expereience: 5
};
const keys = Object.keys(employee);
const values = Object.values(employee);
const entries = Object.entries(employee);
console.log(keys);
console.log(values);
console.log(entries);

// Adding a new property
employee.location = "New York";
console.log(employee);

// Updating an existing property
employee.salary = 95000;
console.log(employee);

// Deleting a property
delete employee.expereience;
console.log(employee);

// Freezing the object to prevent further modifications
Object.freeze(employee);

// Trying to modify the frozen object (these operations will be ignored)
employee.position = "Senior Software Engineer";
employee.bonus = 5000;
delete employee.department;
console.log(employee);

// Checking if the object is frozen
const isFrozen = Object.isFrozen(employee);
console.log("Is employee object frozen?", isFrozen);

// Sealing the object to prevent adding or deleting properties, but allowing modifications
const product = {
    name: "Laptop",
    price: 1200,
    quantity: 2
};
Object.seal(product);

// Modifying an existing property (this is allowed)
product.price = 1100;
console.log(product);

// Trying to add a new property (this will be ignored)
product.category = "Electronics";
console.log(product);

// Trying to delete a property (this will be ignored)
delete product.quantity;
console.log(product);

// Checking if the object is sealed
const isSealed = Object.isSealed(product);
console.log("Is product object sealed?", isSealed);