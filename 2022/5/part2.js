const fs = require("fs");
const input = fs.readFileSync("input.txt", "utf8").toString().split("\n");

let stacks = [
  ["Q", "S", "W", "C", "Z", "V", "F", "T"],
  ["Q", "R", "B"],
  ["B", "Z", "T", "Q", "P", "M", "S"],
  ["D", "V", "F", "R", "Q", "H"],
  ["J", "G", "L", "D", "B", "S", "T", "P"],
  ["W", "R", "T", "Z"],
  ["H", "Q", "M", "N", "S", "F", "R", "J"],
  ["R", "N", "F", "H", "W"],
  ["J", "Z", "T", "Q", "P", "R", "B"],
];

input.forEach((i) => {
  let [_, count, from, to] = /move (\d+) from (\d+) to (\d+)/.exec(i);
  const crates = stacks[from - 1].splice(-count);
  stacks[to - 1].push(...crates);
});

console.log(stacks.map((stack) => stack[stack.length - 1]).join(""));
