const marvel_heroes = ["thor", "ironman" , "spideman"];
const dc_heroes = ["batman", "superman", "flash"];

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes)
//const allHeros = marvel_heroes.concat(dc_heroes); // merges both arrays and returns a new array

//console.log(allHeros);

// const all_new_heros = [...marvel_heroes, ...dc_heroes];
// console.log( typeof all_new_heros);

// const new_array = [1,2,3, [4,5,6], 7 , [8,9,[10,11]]];
// const real_another_array = new_array.flat(Infinity);
// console.log(real_another_array);

// console.log((Array.isArray("Harsh")));
// console.log((Array.from("Harsh")));
// console.log((Array.from({name : "harsh"}))); // gives empty array if doesn't speccify what to make array like key or value

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));
