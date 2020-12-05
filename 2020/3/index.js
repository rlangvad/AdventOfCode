const fs = require('fs')
const rows = fs.readFileSync('input.txt', 'utf8').split('\n')
const rowLength = rows[0].length

const runSlope = (moveRight, moveDown) => {
  let rightIndex = 0
  let treesCount = 0

  rows.forEach((row, index) => {
    if (index % moveDown > 0) {
      return
    }

    if (rightIndex >= rowLength) {
      rightIndex = rightIndex - rowLength
    }

    if (row[rightIndex] === '#') {
      treesCount++
    }

    rightIndex += moveRight
  })

  return treesCount
}

// Part 1
console.log('Part 1: ', runSlope(3, 1))

// Part 2
console.log('Part 2: ', runSlope(1, 1) * runSlope(3, 1) * runSlope(5, 1) * runSlope(7, 1) * runSlope(1, 2))
