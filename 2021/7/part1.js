const fs = require("fs");
const input = fs
  .readFileSync("input.txt", "utf8")
  .toString()
  .split(",")
  .map((i) => Number(i));

const calculateFuel = (list, position) => {
    return list.reduce((prev, curr) => prev += Math.abs(curr - position), 0);
}

let lowestFuel = 0;
input.forEach((value, index) => {
    let currentFuel = calculateFuel(input, value);
    if(currentFuel < lowestFuel || index === 0) {
        lowestFuel = currentFuel;
    }
})

console.log(lowestFuel);
