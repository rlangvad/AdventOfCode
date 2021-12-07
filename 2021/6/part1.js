const fs = require("fs");
const input = fs
  .readFileSync("input.txt", "utf8")
  .toString()
  .split(",")
  .map((i) => Number(i));

const DAYS = 80;

const simluateDay = (fishList) => {
    let fishCount = fishList.length
    for (let i = 0; i < fishCount; i++) {
        fishList[i] = fishList[i] - 1;
        if(fishList[i] < 0) {
            fishList[i] = 6
            fishList.push(8)
        }
    }   

    return fishList;
}

let lanternFishList = [...input]
for (let index = 0; index < DAYS; index++) {
    lanternFishList = simluateDay(lanternFishList);
}

console.log("Result: ", lanternFishList.length);


