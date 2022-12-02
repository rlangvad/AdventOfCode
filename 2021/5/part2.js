const fs = require('fs')
const input = fs
  .readFileSync('input.txt', 'utf8')
  .toString()
  .split('\n')


let horizontal = 0;
let depth = 0;
let aim = 0;

input.forEach(i => {
  const command = i.split(" ");
  const direction = command[0];
  const value = command[1];

  switch (direction) {
    case "forward":
      horizontal += Number(value);
      depth += (aim * Number(value));
      break;
    case "up":
      aim -= Number(value);
      break;
    case "down": 
      aim += Number(value);
      break;
  }
})

const result = depth * horizontal;
console.log("Result: " + result)