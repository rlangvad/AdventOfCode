const fs = require("fs");
const input = fs
  .readFileSync("input.txt", "utf8")
  .toString()
  .split(",")
  .map((i) => Number(i));

const DAYS = 256;

let fishList = new Array(9).fill(0);
input.forEach(i => fishList[i]++)

for (let index = 0; index < DAYS; index++) {
  fishList[7] += fishList[0]
  const newCount = fishList.shift();
  fishList.push(newCount)
}

const population = fishList.reduce((acc, curr) => acc + curr);

console.log("Result: ", population);
