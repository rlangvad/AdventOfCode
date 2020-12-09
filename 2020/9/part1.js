const fs = require('fs')
const input = fs.readFileSync('input.txt', 'utf8').split('\n')

const preambleSize = 25

for (let index = preambleSize; index < input.length; index++) {
  let preamble = input.slice(index - preambleSize, index)
  let found = false
  for (let j = 0; j < index - preambleSize; j++) {
    for (let k = j + 1; k < preambleSize; k++) {
      if (+preamble[j] + +preamble[k] === +input[index]) {
        found = true
      }
    }
  }
  if (!found) {
    console.log(input[index])
  }
}
