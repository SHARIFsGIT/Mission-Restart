const getTax = (amount, taxRate = 0.05) => amount * taxRate;
const totalWithTax = (amount, taxRate) => {
    const tax = getTax(amount, taxRate);
    return amount + tax;
};
console.log(totalWithTax(100)); // Uses default tax rate
console.log(totalWithTax(100, 0.1)); // Uses provided tax rate

// Annonymous function
document.getElementById('calculate-btn').addEventListener('click', function() {
    const amount = parseFloat(document.getElementById('amount-input').value) || 0;
    const taxRate = parseFloat(document.getElementById('taxrate-input').value) || 0.05;
    const total = totalWithTax(amount, taxRate);
    document.getElementById('result').innerText = `Total with tax: ${total.toFixed(2)}`;
});

// Another annonymous arrow function
document.getElementById('reset-btn').addEventListener('click', () => {
    document.getElementById('amount-input').value = '';
    document.getElementById('taxrate-input').value = '';
    document.getElementById('result').innerText = '';
});