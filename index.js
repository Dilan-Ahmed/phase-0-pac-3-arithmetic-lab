function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

add(23, 51);
subtract(552, 134);
multiply(99, 88);
divide(99, 33);

console.log(add(23, 51));
console.log(subtract(552, 134));
console.log(multiply(99, 88));
console.log(divide(99, 33));

function increment(num) {
  return num + 1;
}

function decrement(num) {
  return num - 1;
}

increment(50);
console.log(increment(50));

console.log(increment(divide(99, 33)));

decrement(50);
console.log(decrement(50));

function makeInt(num) {
  return parseInt(num, 10);
}

console.log(makeInt(19));
console.log(makeInt("0x2328"));

function preserveDecimal(num) {
  return parseFloat(num);
}

console.log(preserveDecimal("2.222"));
