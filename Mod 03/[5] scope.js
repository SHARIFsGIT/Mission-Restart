// JavaScript Scope Example

// Global scope
var globalVar = 'I am global';
let globalLet = 'I am also global';
const globalConst = 'Me too';

function outerFunction() {
  // Function scope
  var functionVar = 'I am in function';
  let functionLet = 'Me too';
  
  console.log('Inside outerFunction:');
  console.log(globalVar);      // accessible
  console.log(functionVar);    // accessible
  
  if (true) {
    // Block scope
    var blockVar = 'var ignores blocks';
    let blockLet = 'let respects blocks';
    const blockConst = 'const too';
    
    console.log('\nInside if block:');
    console.log(blockVar);     // accessible
    console.log(blockLet);     // accessible
    console.log(blockConst);   // accessible
  }
  
  console.log('\nOutside if block:');
  console.log(blockVar);       // accessible (var ignores blocks!)
  // console.log(blockLet);    // ERROR - not accessible
  // console.log(blockConst);  // ERROR - not accessible
  
  function innerFunction() {
    console.log('\nInside innerFunction:');
    console.log(globalVar);    // accessible
    console.log(functionVar);  // accessible (closure)
    // console.log(blockLet);  // ERROR - not accessible
  }
  
  innerFunction();
}

outerFunction();

console.log('\nGlobal scope again:');
console.log(globalVar);        // accessible
// console.log(functionVar);   // ERROR - not accessible
// console.log(blockVar);      // ERROR - not accessible