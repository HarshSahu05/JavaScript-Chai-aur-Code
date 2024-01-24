const name = "harsh";
const repoCount = 50;

console.log(`Hey my name is ${name} and my count is ${repoCount}`);  // string interpolation

const gameName = new String("harshsahu");

console.log(gameName.length);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());

const newGameName = gameName.slice(-8,4);

console.log(newGameName);

const newString = "   harsh   ";
console.log(newString.trim());

// includes , replace, 