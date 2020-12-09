const fs = require('fs')
const input = fs.readFileSync('input.txt', 'utf8').split('\n')

const value = 1492208709
for (let i = 0; i < input.length; i++) {
  let totalSum = 0
  let countIndex = i
  let values = []

  while (countIndex < input.length && totalSum < value) {
    values.push(+input[countIndex])
    totalSum += +input[countIndex]
    countIndex++
  }

  if (totalSum === value) {
    console.log(Math.max(...values) + Math.min(...values))
    process.exit(0)
  }
}
