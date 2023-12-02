const fs = require("fs");
const input = fs.readFileSync("input.txt", "utf8").toString().split("\n");

const bag = {
  red: 12,
  green: 13,
  blue: 14,
};

let result = 0;

input.forEach((game, index) => {
  let validGame = true;
  const cubes = game.split(": ")[1].split(",");

  cubes.forEach((cube) => {
    const c = cube.split(";");

    if (c.length > 1) {
      c.forEach((colorPair) => {
        const pair = colorPair.split(" ").filter((el) => el !== "");

        const count = pair[0];
        const color = pair[1];

        if (Number(count) > bag[color]) {
          validGame = false;
        }
      });
    } else {
      const pair = c[0].split(" ").filter((el) => el !== "");
      const count = pair[0];
      const color = pair[1];

      if (Number(count) > bag[color]) {
        validGame = false;
      }
    }
  });

  if (validGame) {
    result += index + 1;
  }
});

console.log("RESULT: ", result);
