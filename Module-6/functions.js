// Function declaration

function welcome() {
  console.log("welcome!");
}

welcome();

// Parameters and return value

function subtract(a, b) {
  return a - b;
}

let result = subtract(30, 10);
console.log(result);

// Default parameter

function greet(name = "Friend") {
  console.log(`Hello, ${name}!`);
}

greet();
greet("primon");

// Function expression

const divide = function (a, b) {
  return a / b;
};

console.log(divide(20, 5));

// Pass function as an argument

function greetUser(greetFunction, name) {
  greetFunction(name);
}

function sayHi(name) {
  console.log(`Hi, ${name}!`);
}

greetUser(sayHi, "mimi");