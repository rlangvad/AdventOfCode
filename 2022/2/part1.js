const fs = require("fs");
const input = fs.readFileSync("input.txt", "utf8").toString().split("\n");

const win = 6;
const draw = 3;
const loose = 0;

const rock = 1;
const paper = 2;
const scissor = 3;

let points = 0;
input.forEach((round) => {
  const [opponent, me] = round.split(" ");

  if (opponent === "A") {
    if (me === "X") {
      points += draw + rock;
    } else if (me === "Y") {
      points += win + paper;
    } else if (me === "Z") {
      points += loose + scissor;
    }
  } else if (opponent === "B") {
    if (me === "X") {
      points += loose + rock;
    } else if (me === "Y") {
      points += draw + paper;
    } else if (me === "Z") {
      points += win + scissor;
    }
  } else if (opponent === "C") {
    if (me === "X") {
      points += win + rock;
    } else if (me === "Y") {
      points += loose + paper;
    } else if (me === "Z") {
      points += draw + scissor;
    }
  }
});

console.log("RESULT: ", points);
