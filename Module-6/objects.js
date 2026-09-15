// Basic object

let student = {
  name: "smita",
  age: 21,
  department: "Software Engineering",
};

console.log(student.name);
console.log(student.age);

// Bracket notation

console.log(student["name"]);

// Modifying an object

student.age = 22;
student.university = "Premier University";

console.log(student);

// Object method

const student2 = {
  name: "tasnim",

  greet() {
    console.log(`Hello, I am ${this.name}`);
  },
};

student2.greet();