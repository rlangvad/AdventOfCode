const fs = require('fs')
const input = fs.readFileSync('input.txt', 'utf8').split('\n')

const runInstructions = (instructions) => {
  let visitedIndices = []
  let accumulator = 0
  let programSuccessful = false
  let continueInstructions = true
  let index = 0
  while (continueInstructions) {
    if (visitedIndices.indexOf(index) > -1) {
      programSuccessful = false
      continueInstructions = false
      index = 0
    }

    if (index >= instructions.length) {
      programSuccessful = true
      continueInstructions = false
      index = 0
    }

    let [key, value] = instructions[index].split(' ')
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

  return { value: programSuccessful, acc: accumulator }
}

input.forEach((instruction, index) => {
  let [key, value] = instruction.split(' ')
  let newInstructions = [...input]
  if (key === 'jmp') {
    newInstructions[index] = `nop ${value}`
  } else if (key === 'nop') {
    newInstructions[index] = `jmp ${value}`
  }

  const result = runInstructions(newInstructions)
  if (result.value) {
    console.log(result.acc)
  }
})
