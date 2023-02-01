let text = "i love you allah. please help me !!";
let aray = ["emon","sumon","yousuf","habib"];

let parts =text.split(" "); // srplits the string with the parameter
console.log(parts);

// if you want to separate all the charecter of an string:
let charecters = text.split("");
console.log(charecters);

// for slice:
let part2 = text.slice(2,10);
console.log(part2);

// for a particular part of an string(similar to slice):
let part3 = text.substring(2,10);
console.log(part3);

// string concatinate:
let fname = "Emon";
let lName = "Mia";
let fullName = fname.concat(" " , lName);
console.log(fullName);

let joinedAray = aray.join("*");
console.log(joinedAray);




