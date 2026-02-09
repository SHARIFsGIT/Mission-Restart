// Pass by Value vs Pass by Reference

console.log('=== PRIMITIVES (Pass by Value) ===\n');

let num = 10;
console.log('Before:', num);

function changeNumber(x) {
  x = 99;
  console.log('Inside function:', x);
}

changeNumber(num);
console.log('After:', num); // Still 10! (copy was changed)
console.log();


console.log('=== OBJECTS (Pass by Reference) ===\n');

let person = { name: 'Alice', age: 25 };
console.log('Before:', person);

function changePerson(obj) {
  obj.age = 99;
  console.log('Inside function:', obj);
}

changePerson(person);
console.log('After:', person); // Changed! (same object)
console.log();


console.log('=== ARRAYS (Pass by Reference) ===\n');

let numbers = [1, 2, 3];
console.log('Before:', numbers);

function changeArray(arr) {
  arr.push(4);
  arr[0] = 999;
  console.log('Inside function:', arr);
}

changeArray(numbers);
console.log('After:', numbers); // Changed! (same array)
console.log();


console.log('=== REASSIGNMENT ===\n');

let car = { brand: 'Toyota' };
console.log('Before:', car);

function reassignObject(obj) {
  obj = { brand: 'Honda' }; // Creates NEW object
  console.log('Inside function:', obj);
}

reassignObject(car);
console.log('After:', car); // Still Toyota! (reassignment doesn't affect original)
console.log();


console.log('=== Summary ===');
console.log('Primitives (number, string, boolean): Pass by VALUE (copy)');
console.log('Objects & Arrays: Pass by REFERENCE (same object)');
console.log('Reassignment (=) creates new object, doesn\'t affect original');

// Arguments
function add(a, b){
  console.log(a, b)
}
add(4, 8)
add(8, 5, 6) // I can't get this

function sum(x, y){
  console.log(arguments)
}
sum(4, 8)
sum(8, 5, 6) // I can get this

function data(x, y){
  const data = [...arguments]
  console.log(data)
}
data(4, 8)
data(8, 5, 6) // I can get this