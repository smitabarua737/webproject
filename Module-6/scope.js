// Function scope

let globalVariable = "Global value";
function test() {
  let localVariable = "Local value";
  console.log(globalVariable);
  console.log(localVariable);
}
test();
console.log(globalVariable);
// console.log(localVariable); // Error

// Block scope

if (true) {
  let message = "Inside the block";
  console.log(message);
}
// console.log(message); // Error

// Why `var` is different

if (true) {
  var message = "Hello from var";
}
console.log(message); // Works

if (true) {
  let message = "Hello from let";
}
console.log(message); // Error

// Lexical scope

function outerFunction() {
  let outerVariable = "Outer value";
  console.log(outerVariable);

  function innerFunction() {
    let innerVariable = "Inner value";
    console.log(innerVariable);
    console.log(outerVariable);
  }

  innerFunction();
}
outerFunction();

// Hoisting
//  `var` is hoisted and initialized with undefined.

console.log(hoistedVariable);

var hoistedVariable = "I am hoisted";

console.log(hoistedVariable);
