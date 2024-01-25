const mydate = new Date();
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());

console.log(typeof mydate);

// const myNewDate = new Date(2023, 5 ,23)
// const myNewDate = new Date(2023, 5 ,23, 5,6);;
const myNewDate = new Date("2023-01-23");;
//console.log(myNewDate.toLocaleString());

// const myTime = Date.now();
// console.log(myTime);
// console.log(myNewDate.getTime());

//console.log(Math.floor(Date.now()/1000));

const newDate = new Date();

newDate.toLocaleString('default',{
    weekday : "long",
})
console.log(newDate.weekday);