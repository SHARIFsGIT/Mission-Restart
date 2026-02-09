// Increment Operators in JavaScript

console.log('=== += Operator ===\n');

let counter1 = 0;
console.log('counter1 =', counter1);
console.log('counter1 += 1 returns:', counter1 += 1); // Adds and returns new value
console.log('counter1 is now:', counter1);
console.log();


console.log('=== ++ Operator (Post-increment) ===\n');

let counter2 = 0;
console.log('counter2 =', counter2);
console.log('counter2++ returns:', counter2++); // Returns old value, THEN increments
console.log('counter2 is now:', counter2);
console.log();


console.log('=== ++ Operator (Pre-increment) ===\n');

let counter3 = 0;
console.log('counter3 =', counter3);
console.log('++counter3 returns:', ++counter3); // Increments FIRST, then returns
console.log('counter3 is now:', counter3);
console.log();


console.log('=== Comparison ===\n');

let a = 5;
let b = 5;
let c = 5;

console.log('a += 1  →', a += 1);  // Returns 6
console.log('b++     →', b++);     // Returns 5 (then becomes 6)
console.log('++c     →', ++c);     // Returns 6

console.log('\nAfter operations:');
console.log('a =', a); // 6
console.log('b =', b); // 6
console.log('c =', c); // 6
console.log();


console.log('=== In Practice ===\n');

let x = 10;
console.log('x++ in expression: result =', x++ + 5); // Uses 10, then increments
console.log('x is now:', x);

let y = 10;
console.log('++y in expression: result =', ++y + 5); // Increments first, uses 11
console.log('y is now:', y);
console.log();


console.log('=== Summary ===');
console.log('counter += 1  → Add 1 and return new value');
console.log('counter++     → Return current value, THEN add 1');
console.log('++counter     → Add 1 FIRST, then return new value');