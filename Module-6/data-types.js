let studentName = "dekisuki"; // String
let age = 24; // Number
let passed = false; // Boolean
let result; // Undefined
let scholarship = null; // Null
let largeNumber = 987654321n; // BigInt

console.log(typeof studentName);
console.log(typeof age);
console.log(typeof passed);
console.log(typeof result);
console.log(typeof scholarship);
console.log(typeof largeNumber);


const sym1 = Symbol("studentid");
const sym2 = Symbol("studentid");

console.log(sym1 === sym2); // false
console.log(sym1.description); // "studentid"