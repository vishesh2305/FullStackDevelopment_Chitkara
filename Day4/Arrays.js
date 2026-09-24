const mixed = [1,"two", true, null, {name: "object"}, [1,2]];

console.log(mixed[2])

const books = ["Dune", "1984", "Emma"];

console.log(books[0]);
console.log(books[books.length - 1]);
console.log(books.at(-1));


books[1] = "Brave New World";

console.log(books);

console.log(books[10]);


const nums = [1,2,3,4,5,6];

nums.splice(2,1);

console.log(nums);

nums.splice(0, 2, "a");
console.log(nums);

const a = [1,2];
const b = [4,5];

const combined = a .concat(b);
console.log(combined);