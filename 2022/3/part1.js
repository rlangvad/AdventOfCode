const fs = require("fs");
const input = fs.readFileSync("input.txt", "utf8").toString().split("\n");

const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

let totalCount = 0;
input.forEach((rucksack) => {
  const firstCompartment = rucksack.slice(0, rucksack.length / 2);
  const lastCompartment = rucksack.slice(rucksack.length / 2, rucksack.length);

  let commonItem = "";
  [...firstCompartment].forEach((s) => {
    if (lastCompartment.includes(s)) {
      commonItem = s;
      return;
    }
  });

  totalCount += alphabet.indexOf(commonItem) + 1;
});

console.log("RESULT: ", totalCount);
