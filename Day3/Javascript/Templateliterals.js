const name = "Ada";
const age = 30;

console.log("Hello, " + name + ". You are  "+ age + " years old");

console.log(`Hello, ${name}. You are ${age} years old.`);




const price = 20;
const quantity = 3;


console.log(`Total: ${price * quantity}`);

console.log(`Item costs ${price.toFixed(2)}`);

function shout(text){
    return text.toUpperCase();
}

console.log(`${shout("hello")}`);

const oldWay = "Dear ada,\nThank You for signing up.\nSee you soon."

const newWay = `Dear Ada,
Thank you for signing up.
See you soon.`

const isMember = true;
console.log(`Status : ${isMember ? `Active member`: `Guest`}`);

const age2 = 25;

console.log(`Age: ${age2}`)
console.log(typeof `Age: ${age}`);