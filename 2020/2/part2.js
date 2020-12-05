const fs = require('fs')
const input = fs.readFileSync('input.txt', 'utf8').toString().split('\n')

let result = 0
input.forEach((i) => {
  const inputRow = i.split(' ')

  const policyValue = inputRow[0].split('-')
  const firstIndex = policyValue[0] - 1
  const secondIndex = policyValue[1] - 1

  const character = inputRow[1][0]
  const password = inputRow[2]

  if ((password[firstIndex] === character || password[secondIndex] === character) && password[firstIndex] !== password[secondIndex]) {
    result++
  }
})

console.log(result)
