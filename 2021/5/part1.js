const fs = require("fs");
const input = fs.readFileSync("input.txt", "utf8").toString().split("\n");


const values = input.map(i => i.split(" -> "));


values.forEach