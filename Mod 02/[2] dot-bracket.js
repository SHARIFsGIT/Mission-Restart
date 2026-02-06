// Dot notation and bracket notation in JavaScript

const person = {
    firstName: 'John',
    lastName: 'Doe',
    1: 'Roll Number 1',
    age: 28,
    'home-address': '123 Main St' // Key with hyphen
};
console.log('Dot Notation:');
console.log('First Name:', person.firstName);
console.log('Age:', person.age);
console.log('\nBracket Notation:');
console.log('Roll Number:', person[1]); // Accessing numeric key using bracket notation
console.log('Home Address:', person['home-address']); // Accessing key with hyphen using bracket notation

// Looping through object properties
console.log('\nLooping through object properties:');
for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(`${key}: ${person[key]}`);
    }
}

// Chain of property access
const student = {
    name: 'Alice',
    details: {
        age: 22,
        address: {
            city: 'Wonderland',
            zip: '12345'
        }
    }
};
console.log('\nChain of property access:');
console.log('City:', student.details.address.city);
console.log('Zip:', student.details.address.zip);

// Optional chaining with undefined properties
const employee = {
    name: 'Bob',
    department: {
        name: 'Engineering'
        // manager property is missing
    }
};
console.log('\nOptional chaining:');
console.log('Manager Name:', employee.department.manager?.name); // Will not throw an error, returns undefined