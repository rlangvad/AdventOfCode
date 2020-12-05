const fs = require('fs')
const input = fs
  .readFileSync('input.txt', 'utf8')
  .toString()
  .split('\n')
  .map((i) => Number(i))

input.forEach((i) => {
  input.forEach((j) => {
    if (i + j === 2020) {
      console.log('Result: ', i * j)
      return
    }
  })
})
