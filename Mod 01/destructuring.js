const product = {
    name: "Laptop",
    price: 1200,
    quantity: 2
};
const discount = product.price*20/100;
const pay = product.price - discount;
const vat = pay*15/100;
const total = pay + vat;
console.log('Product Name:', product.name);
console.log('Price:', product.price);
console.log('Discount:', discount);
console.log('Payable Amount after Discount:', pay);
console.log('VAT:', vat);
console.log('Total Amount:', total);

// Destructuring assignment
const { name, price, quantity, tax= 10 } = product;
console.log('Destructured Values - Name:', name, 'Price:', price, 'Quantity:', quantity, 'Tax:', tax);

const numbers = [10, 20];
const [first, second, third = 30] = numbers;
console.log('Destructured Array Values - First:', first, 'Second:', second, 'Third:', third);