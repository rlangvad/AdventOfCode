const fs = require('fs')
const input = fs.readFileSync('input.txt', 'utf8').split('\n')

let accumulator = 0
let visitedIndices = []

for (let index = 0; index < input.length; ) {
  let [key, value] = input[index].split(' ')

  if (visitedIndices.indexOf(index) > 0) {
    console.log('RESULT: ', accumulator)
    process.exit(0)
  }

  visitedIndices.push(index)

  if (key === 'acc') {
    accumulator += +value
    index++
  } else if (key === 'jmp') {
    index += +value
  } else {
    index++
  }
}
