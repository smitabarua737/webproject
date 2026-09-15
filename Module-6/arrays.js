// Creating arrays

const students = ["smita", "tasnim", "sanjana"];

console.log(students[0]);
console.log(students[1]);
console.log(students.length);


// Modifying arrays

students.push("moome");

students.pop();

students.unshift("mow");

students.shift();

console.log(students);

// Useful ES6+ array methods

const numbers = [2, 4, 6, 8, 10];

const tripled = numbers.map((number) => number * 3);

console.log(tripled);

const numbers2 = [5, 12, 18, 24, 35];

const result = numbers2.filter((number) => number >= 18);

console.log(result);
