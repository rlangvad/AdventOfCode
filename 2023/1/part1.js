const fs = require("fs");
const input = fs.readFileSync("input.txt", "utf8").toString().split("\n");

const result = input.reduce((sum, curr) => {
  const first = curr.match(/\d/);
  const second = curr.match(/\d(?=\D*$)/);
  return sum + Number(first[0] + second[0]);
}, 0);

console.log("RESULT: ", result);
