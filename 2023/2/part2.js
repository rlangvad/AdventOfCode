const fs = require("fs");
const input = fs.readFileSync("input.txt", "utf8").toString().split("\n");

let power = 0;

input.forEach((game) => {
  const highestColor = {
    red: 0,
    green: 0,
    blue: 0,
  };

  const cubes = game.split(": ")[1].split(",");

  cubes.forEach((cube) => {
    const c = cube.split(";");

    if (c.length > 1) {
      c.forEach((colorPair) => {
        const pair = colorPair.split(" ").filter((el) => el !== "");

        const count = pair[0];
        const color = pair[1];

        highestColor[color] =
          highestColor[color] < Number(count)
            ? Number(count)
            : highestColor[color];
      });
    } else {
      const pair = c[0].split(" ").filter((el) => el !== "");

      const count = pair[0];
      const color = pair[1];

      highestColor[color] =
        highestColor[color] < Number(count)
          ? Number(count)
          : highestColor[color];
    }
  });

  power += highestColor.red * highestColor.green * highestColor.blue;
});

console.log("RESULT: ", power);
