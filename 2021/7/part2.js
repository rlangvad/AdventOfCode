const fs = require("fs");
const input = fs
  .readFileSync("input.txt", "utf8")
  .toString()
  .split(",")
  .map((i) => Number(i));

const calculateFuel = (list, position) => {
  return list.reduce((prev, curr) => {
    const steps = Math.abs(curr - position);
    let fuel = 0;
    for (let i = 1; i <= steps; i++) {
      fuel += i;
    }

    return prev + fuel;
  }, 0);
};

const max = Math.max(...input);
let lowestFuel = 0;
for (let i = 1; i <= max; i++) {
  let currentFuel = calculateFuel(input, i);
  if (currentFuel < lowestFuel || i === 1) {
    lowestFuel = currentFuel;
  }
}

console.log(lowestFuel);
