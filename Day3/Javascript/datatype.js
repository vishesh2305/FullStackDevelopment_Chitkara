let str = "Hello, World !"
console.log("String: ", str, "| typeof: ", typeof str);

let intNum = 42;
console.log(typeof NaN)


let notAssigned;
console.log("Undefined : ", notAssigned, "| typeof:", typeof notAssigned)

let emptyValue = null;
console.log("NULL : ", emptyValue, "| typeof: ", typeof emptyValue);


let uniqueId = Symbol("id");
console.log("Symbol :", uniqueId.toString(), "| type of : ", typeof uniqueId)

let bigNumber = 1212345678923456789n;
console.log("BigInt:", bigNumber, "| typeof: ", typeof bigNumber);


console.log("\n-- Quirks worth noticing----");

console.log(typeof NaN)
console.log(0.1 + 0.2)

console.log(null==undefined)

console.log(null=== undefined)


