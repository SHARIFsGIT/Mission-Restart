const testValues = [
  { value: 0, label: 'Number 0' },
  { value: '', label: 'Empty string' },
  { value: ' ', label: 'String with space' },
  { value: '0', label: 'String "0"' },
  { value: {}, label: 'Empty object' },
  { value: [], label: 'Empty array' },
  { value: null, label: 'null' },
  { value: undefined, label: 'undefined' },
  { value: false, label: 'Boolean false' },
  { value: NaN, label: 'NaN' },
  { value: 1, label: 'Number 1' },
  { value: 'hello', label: 'Non-empty string' },
  { value: true, label: 'Boolean true' },
];

console.log('═══════════════════════════════════════');
console.log('   JAVASCRIPT TRUTHINESS CHECKER');
console.log('═══════════════════════════════════════\n');

testValues.forEach(({ value, label }) => {
  const truthiness = value ? 'TRUTHY ✓' : 'FALSY ✗';
  let valueDisplay;
  
  if (typeof value === 'string') {
    valueDisplay = `"${value}"`;
  } else if (value === null) {
    valueDisplay = 'null';
  } else if (value === undefined) {
    valueDisplay = 'undefined';
  } else if (Number.isNaN(value)) {
    valueDisplay = 'NaN';
  } else {
    valueDisplay = JSON.stringify(value);
  }
  
  console.log(`${label.padEnd(20)} | Value: ${valueDisplay.padEnd(12)} | ${truthiness}`);
});

console.log('\n═══════════════════════════════════════');
console.log('Summary:');
console.log('FALSY values: 0, "", null, undefined, false, NaN');
console.log('Everything else is TRUTHY (including [], {}, "0", " ")');
console.log('═══════════════════════════════════════');