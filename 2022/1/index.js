const fs = require("fs");
const input = fs
  .readFileSync("input.txt", "utf8")
  .toString()
  .split("\n")
  .map((i) => Number(i));

let currentCount = 0;
const summary = [];

input.forEach((calories) => {
  if (calories > 0) {
    currentCount += calories;
  } else {
    summary.push(currentCount);
    currentCount = 0;
  }
});

const resultPart1 = summary
  .sort((a, b) => a - b)
  .reverse()
  .slice(0)[0];

const resultPart2 = summary
  .sort((a, b) => a - b)
  .reverse()
  .slice(0, 3)
  .reduce((a, b) => a + b, 0);

console.log("RESULT PART 1: ", resultPart1);
console.log("RESULT PART 2: ", resultPart2);
