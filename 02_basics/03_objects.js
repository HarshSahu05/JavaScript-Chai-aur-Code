//singleton -- when you make object from constructor
//when u make from literals singleton nhi bnta

//object literals
//Object.create() // constructor

const mySym = Symbol("key1")
const js_user = {
    name : "hitesh",
    "fullname" : "harshsahu", // important
    [mySym] : "mykey1" , // sqaure bracket lga kr hi symbol ki try use hoga and same for accessing
    age : 23,
    location : "jaipur",
    email : "harsh.google.com",
    isloggedin : false,
    lastLoggedin : ["monday", "saturday"]
}
// console.log(js_user.email);
// console.log(js_user["email"]); // as a string dena hota kyuki ass a string hi store hoti keyy
// console.log(js_user[mySym]);

// js_user.email = "xyzemail.com";
// Object.freeze(js_user);
// js_user.email = "hhhh.gmail.com";
// console.log(js_user);

js_user.greeting = function(){
    console.log(`hello jaaneman ${this.name}`);
}
//console.log(js_user.greeting); // [Function (anonymous)]
console.log(js_user.greeting());