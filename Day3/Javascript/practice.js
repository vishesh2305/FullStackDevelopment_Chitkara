const name = "Vishesh";
const age = 21;
const school = "chitkara";

// Each constant variable was chosen to refer for later questions. 

let fourth = 4;

// let is a block scope element, which works only for the current block . 


console.log(true==1);
console.log(true===1);

// the == will compare the value after coverting them to the same type . and === will compare the values in their original state. 


console.log(`The user name is ${name} having age ${age} belongs to ${school} University.`);


const user = {address: null};


user.address = {city: null};

user.address.city = "Sangrur";

console.log(user.address.city);