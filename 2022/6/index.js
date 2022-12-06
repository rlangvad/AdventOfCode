const fs = require("fs");
const input = fs.readFileSync("input.txt", "utf8").toString();

const getStartOfPacket = (input, size) => {
  for (let i = 0; i < input.length; i++) {
    if (new Set(input.slice(i, i + size)).size === size) {
      return i + size;
    }
  }
};

// Part 1
console.log(getStartOfPacket(input, 4))

// Part 2
console.log(getStartOfPacket(input, 14))