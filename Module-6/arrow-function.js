// Arrow functions vs regular functions

function normalFunction() {
  console.log("This is a normal function");
}

const shortFunction = () => {
  console.log("This is an Arrow function");
};

normalFunction();
shortFunction();

// Lexical bound `this` in arrow functions
// While regular functions bind `this` dynamically based on how they are called, arrow functions permanently look outward to their parent scope for this. This means that arrow functions do not have their own `this` context, and they inherit it from the surrounding code.

const student = {
  name: "smita",
  normalFunction: function () {
    console.log(this.name);
  },
  shortFunction: () => {
    console.log(this.name);
  }
};

student.normalFunction();
student.shortFunction();

const student2 = {
  name: "tasnim",
  normalFunction() {
    console.log(this.name);
    const shortFunction = () => {
      console.log(this.name);
    };
    shortFunction();
  }
};

student2.normalFunction();


// Parameter

const welcome = (name) => {
  console.log(`welcome, ${name}!`);
};
welcome("sanjana");

// Implicit return

const subtract = (a, b) => a - b;
console.log(subtract(30, 10));

const getstudent = id => ({ studentId: id, department: "CSE" });
console.log(getstudent(2));

// Explicit return

const divide = (a, b) => {
  return a / b;
};
console.log(divide(20, 5));

// With arrays

const numbers = [2, 4, 6, 8, 10];
const half = numbers.map((number) => number / 2);
console.log(half);