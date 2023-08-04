let input = require("fs").readFileSync("./dev/stdin").toString().split('\n');

input[0] = input[0].split(" ");
input[1] = input[1].split(" ");
input[2] = input[2].split(" ");
input[3] = input[3].split(" ");
input[4] = input[4].split(" ");
input[5] = input[5].split(" ");

console.log(input[0]);
console.log(input[0][0]);
console.log(input[0][1]);
console.log("-------------------");

console.log(input[1]);
console.log(input[2]);
console.log(input[3]);
console.log(input[4]);
console.log(input[5]);


const map = [[]];

