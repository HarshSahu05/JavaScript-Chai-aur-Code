function one(){
    const username = "harsh";

    function two(){
        const website = "youtube";
        console.log(username);
    }
    console.log(website);
    two();
}

// one();
// +++++++++++++interesting question
console.log( addOne(5)
);
function addOne (num){
    return num +1;
}
addTwo(5); // hoisting error aata hai
const addTwo = function(num){
    return num + 2;
}

