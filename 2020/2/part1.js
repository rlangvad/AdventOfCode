const fs = require('fs')
const input = fs.readFileSync('input.txt', 'utf8').toString().split('\n')

let result = 0
input.forEach((i) => {
  const inputRow = i.split(' ')

  const policyValue = inputRow[0].split('-')
  const low = policyValue[0]
  const high = policyValue[1]

  const character = inputRow[1][0]
  const password = inputRow[2]

  const count = password.split(character).length - 1

  if (count >= low && count <= high) {
    result++
  }
})

console.log(result)
