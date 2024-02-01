const tinderUser = new Object();

tinderUser.id ="abc123";
tinderUser.name ="sam";
tinderUser.isLoggedin = false;

//console.log(tinderUser);

const regularUser = {
    email : "harshgmail.com",
    fullname : {
        userfullname : {
            firstname : "harsh",
            lastname : "sahu0,"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1 : 'a',
    2 : 'b'
}
const obj2 = {
    3 : 'C',
    4 : 'D'
}
//const obj3 = {obj1,obj2};
//const obj3 = Object.assign({},obj1,obj2);// (target,source)
//const obj3 = {...obj1,...obj2};
//console.log(obj3);

const users = [
    {
        
    },
    {

    },
    {

    }
]
users[1].email;
console.log(Object.keys(tinderUser)); // keys returned type is arrays
console.log(Object.entries(tinderUser)); // make array of each key value pair

console.log(tinderUser.hasOwnProperty('isLoggedn'));