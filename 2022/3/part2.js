const fs = require("fs");
const input = fs.readFileSync("input.txt", "utf8").toString().split("\n");

const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const findCommonItems = (s1, s2) => {
  let commonItem = [];
  [...s1].forEach((s) => {
    if (s2.includes(s) && !commonItem.includes(s)) {
      commonItem.push(s);
    }
  });

  return commonItem;
};

let totalCount = 0;
for (let i = 0; i < input.length; i += 3) {
  const first = findCommonItems(input[i], input[i + 1]);
  const second = findCommonItems(first.join(""), input[i + 2]);

  totalCount += alphabet.indexOf(second.join("")) + 1;
}

console.log("RESULT: ", totalCount);
