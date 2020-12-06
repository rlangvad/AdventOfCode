const fs = require('fs')
const input = fs.readFileSync('input.txt', 'utf8').split('\n')

let totalCount = 0
let values = []
let newGroup = true
input.forEach((row) => {
  if (!row) {
    totalCount += values.length
    values = []
    newGroup = true
    return
  }
  if (newGroup) {
    values = row.split('')
    newGroup = false
  } else {
    let tempValues = []
    row.split('').forEach((c) => {
      if (values.indexOf(c) > -1) {
        tempValues.push(c)
      }
    })
    values = tempValues
  }
})

// Add last iteration
totalCount += values.length

console.log(totalCount)
