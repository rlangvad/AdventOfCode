const fs = require("fs");
const input = fs.readFileSync("input.txt", "utf8").toString().split("\n");

let bitHolder = [];
let gamma = "";
let epsilon = "";

let oxygenRating = 0;
let scrubberRating = 0;

for (let i = 0; i < 5; i++) {
  bitHolder.push(...input.map((i) => i[0]));
  const isOne = bitHolder.reduce((prev, curr) => (prev += Number(curr)), 0) / 2 >= input.length;
  gamma = `${gamma}${isOne ? "1" : "0"}`;
  epsilon = `${epsilon}${isOne ? "0" : "1"}`;
}


console.log("GAMMA: ", parseFloat(gamma))
console.log("EPSILON: ", parseFloat(epsilon))
const result = parseFloat(gamma) * parseFloat(epsilon);
console.log("Result: " + result)
