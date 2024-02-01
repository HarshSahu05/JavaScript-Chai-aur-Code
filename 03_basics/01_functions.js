// function myfunc(){

// }
// myfunc // taking reference
// myfunc();//

// function userLogin(username){
//     if(username === undefined){
//         console.log("Please enter username");
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(userLogin("harsh"));
// console.log(userLogin());

function shoppingCart(val1,val2, ...num1){
    return num1
}
//console.log(shoppingCart(200,300,400,500)); // returning array rest operator

const user ={
    username : "harsh",
    price : 199
}
function handleUser(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleUser(user);
// handleUser({
//     username : "harsh",
//     price : 199
// })
const newarr = [100,200,300,400];
function myarr(getarr){
    return getarr[1];
}

console.log(myarr(newarr));