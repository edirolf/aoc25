// Example 1: Basic math operations
function calculateSum(a: number, b: number): number {
    return a + b;
}

function calculateProduct(a: number, b: number): number {
    return a * b;
}

const num1 = 15;
const num2 = 25;

console.log(`🔢 Math Operations Example`);
console.log(`Numbers: ${num1} and ${num2}`);
console.log(`Sum: ${calculateSum(num1, num2)}`);
console.log(`Product: ${calculateProduct(num1, num2)}`);
console.log(`Average: ${(num1 + num2) / 2}`);

// Demonstrate arrays and loops
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(n => n % 2 === 0);
const squares = numbers.map(n => n * n);

console.log(`\n📊 Array Operations:`);
console.log(`Original: [${numbers.join(', ')}]`);
console.log(`Even numbers: [${evenNumbers.join(', ')}]`);
console.log(`Squares: [${squares.join(', ')}]`);