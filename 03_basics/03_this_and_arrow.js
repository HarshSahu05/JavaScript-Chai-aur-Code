const chai = () => {
    const username = "harsh";
    console.log(this);
}

// chai();

// const addTwo = (num1 , num2) => (num1 + num2)// implicit return
const addTwo = ( num1 , num2 ) => ({username : "hitesh"})

console.log(addTwo(3,4));