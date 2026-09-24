const age = 20;
const hasId = true;

if(age >= 18){
    if(hasId){
        console.log("Entry Allowed");
    }else{
        console.log("Id Required");
    }
}else{
    console.log("Too Young");
}


const status = age >= 18 ? "Adult" : "Minor";
console.log(status);



for(var i=0; i<3; i++){
    setTimeout(()=>console.log(i));
}

for(let i=0; i<3; i++){
    setTimeout(() => console.log(i), 100);
}


// while loop

function tryConnect(){
    const didSucced = Math.random() < 0.3;
    console.log(didSucced ? "Connected!" : "Failed, retrying ...");
    return didSucced;
}


let attempts = 0;
let success = false;

while(attempts < 5 && !success){
    attempts++;
    success = tryConnect();
}

const colors = ["red", "green", "blue"];

for(const color of colors){
    console.log(color);
}

for(const index in colors){
    console.log(index);
}


const student = {name : "Ada", age: 20, course:"CS"};

for(const key in student){
    console.log(`${key}: ${student[key]}`)
}