const fs = require('fs')
const input = fs
  .readFileSync('input.txt', 'utf8')
  .toString()
  .split('\n')
  .map((i) => Number(i))

const total = input.reduce((prev, curr, index) => {
  if(index > 0 && curr > input[index - 1]) return prev + 1;
  return prev;
}, 0)

console.log(total);
