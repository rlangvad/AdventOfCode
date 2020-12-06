const fs = require('fs')
const input = fs.readFileSync('input.txt', 'utf8').split('\n')

let totalCount = 0
let values = []
input.forEach((row) => {
  if (!row) {
    totalCount += values.length
    values = []
    return
  }
  row.split('').forEach((c) => {
    if (values.indexOf(c) === -1) {
      values.push(c)
    }
  })
})

// Add last iteration
totalCount += values.length

console.log(totalCount)
