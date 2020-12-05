const fs = require('fs')
const input = fs
  .readFileSync('input.txt', 'utf8')
  .split('\n')
  .map((i) => i.split(''))

const getRow = (value) => {
  let low = 0
  let high = 127
  value.forEach((char) => {
    let range = high - low + 1
    if (char === 'F') {
      high = range === 1 ? range : high - range / 2
    } else if (char === 'B') {
      low = range === 1 ? range : low + range / 2
    }
  })
  return low
}

const getSeat = (value) => {
  let low = 0
  let high = 7
  value.forEach((char) => {
    let range = high - low + 1
    if (char === 'L') {
      high = range === 1 ? range : high - range / 2
    } else if (char === 'R') {
      low = range === 1 ? range : low + range / 2
    }
  })
  return high
}

const seatIds = []
input.forEach((boardingPass) => {
  const row = getRow(boardingPass.slice(0, 7))
  const seat = getSeat(boardingPass.slice(7, 10))
  seatIds.push(row * 8 + seat)
})

// Part 1
console.log('Part 1 Result: ', Math.max.apply(Math, seatIds))

// Part 2
const max = Math.max.apply(Math, seatIds)
const min = Math.min.apply(Math, seatIds)
let missingSeat = 0
while (missingSeat === 0) {
  for (let i = min + 1; i <= max; i++) {
    if (!seatIds.includes(i)) {
      missingSeat = i
    }
  }
}

console.log('Part 2 Result: ', missingSeat)
