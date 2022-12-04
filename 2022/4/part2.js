const fs = require("fs");
const input = fs.readFileSync("input.txt", "utf8").toString().split("\n");

let containCount = 0;
input.forEach((pair) => {
  const [first, second] = pair.split(",");

  const [low, high] = first.split("-").map(Number);
  const [low2, high2] = second.split("-").map(Number);

  if ((low >= low2 && low <= high2) || (high >= low2 && high <= high2) || (low <= low2 && high >= high2)) {
    containCount += 1;
  }
});

console.log("RESULT: ", containCount);
