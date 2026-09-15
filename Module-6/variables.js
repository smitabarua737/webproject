// Using `let`:

let name = "Nobita";
let age = 18;
let isStudent = true;

console.log(name);
console.log(age);
console.log(isStudent);

age = 20;

console.log(age);

age = "Twenty years old";

console.log(age);

// Using `const`:

const university = "Premier University";

console.log(university);

// const university = "Premier University";

// university = "Other University";

// Using `var`:

if (true) {
  var globalAlert = "I can escape the block!";
  let blockSecret = "I am locked inside.";
  const permanentSecret = "I am also locked inside.";

  console.log(blockSecret);
}

console.log(globalAlert);
// console.log(blockSecret);// Error