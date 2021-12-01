const fs = require("fs");
const input = fs
  .readFileSync("input.txt", "utf8")
  .toString()
  .split("\n")
  .map((i) => Number(i));

const total = input.reduce((sum, curr, index) => {
  if (index > 1) {
    sum.push(input[index - 2] + input[index - 1] + curr);
  }
  return sum;
}, []);

// From part1
const total = input.reduce((prev, curr, index) => {
  if(index > 0 && curr > input[index - 1]) return prev + 1;
  return prev;
}, 0)

console.log(total);
