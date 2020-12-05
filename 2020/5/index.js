const fs = require('fs')
const input = fs
  .readFileSync('input.txt', 'utf8')
  .split('\n')
  .map((i) => i.split(''))

const getRow = (value) => {
  return value.reduce(
    (prev, char) => {
      let range = prev.high - prev.low + 1
      if (char === 'F') {
        prev.high = range === 1 ? range : prev.high - range / 2
      } else if (char === 'B') {
        prev.low = range === 1 ? range : prev.low + range / 2
      }
      return prev
    },
    { low: 0, high: 127 }
  ).low
}

const getSeat = (value) => {
  return value.reduce(
    (prev, char) => {
      let range = prev.high - prev.low + 1
      if (char === 'L') {
        prev.high = range === 1 ? range : prev.high - range / 2
      } else if (char === 'R') {
        prev.low = range === 1 ? range : prev.low + range / 2
      }
      return prev
    },
    { low: 0, high: 7 }
  ).high
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
