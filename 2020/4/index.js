const fs = require('fs')
const input = fs.readFileSync('input.txt', 'utf8').split('\n')
const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']

// Create passport rows
let passports = []
let tempPass = ''
input.forEach((i) => {
  if (i) {
    tempPass += i.trim().replace(/ /g, '')
  } else {
    passports.push(tempPass)
    tempPass = ''
  }
})
passports.push(tempPass)

const validatePassportAttributes = (passport) => {
  let validPassport = true
  requiredFields.forEach((field) => {
    if (!passport.includes(field)) {
      validPassport = false
    }
  })

  return validPassport
}

const validatePassportAttributeValues = (passport) => {
  let passportFields = []
  let fields = passport.split(':')
  fields.forEach((p, i) => {
    if (i === 0) {
      passportFields.push(p)
    } else if (i === fields.length - 1) {
      passportFields[i - 1] += p
    } else {
      passportFields[i - 1] += p.substr(0, p.length - 3)
      passportFields[i] = p.substr(p.length - 3, 3)
    }
  })

  let validPassport = true

  let index = 0
  while (index < passportFields.length && validPassport === true) {
    const key = passportFields[index].substr(0, 3)
    const value = passportFields[index].substr(3)

    if (key === 'cid') {
      validPassport = true
    } else if (key === 'byr') {
      validPassport = Number(value) >= 1920 && Number(value) <= 2002
    } else if (key === 'iyr') {
      validPassport = Number(value) >= 2010 && Number(value) <= 2020
    } else if (key === 'eyr') {
      validPassport = Number(value) >= 2020 && Number(value) <= 2030
    } else if (key === 'hgt') {
      if (value.indexOf('cm') > -1) {
        const height = value.slice(0, value.indexOf('cm'))
        validPassport = Number(height) >= 150 && Number(height) <= 193
      } else if (value.indexOf('in') > -1) {
        const height = value.slice(0, value.indexOf('in'))
        validPassport = Number(height) >= 59 && Number(height) <= 76
      } else {
        validPassport = false
      }
    } else if (key === 'hcl') {
      validPassport = /^#[0-9a-f]{6}$/i.test(value)
    } else if (key === 'ecl') {
      const validEcl = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']
      validPassport = validEcl.includes(value)
    } else if (key === 'pid') {
      validPassport = value.length === 9
    }

    index++
  }

  return validPassport
}

let validPassportsPart1 = 0
passports.forEach((passport) => {
  if (validatePassportAttributes(passport)) {
    validPassportsPart1++
  }
})

let validPassportsPart2 = 0
passports.forEach((passport) => {
  if (validatePassportAttributes(passport) && validatePassportAttributeValues(passport)) {
    validPassportsPart2++
  }
})

// Part 1
console.log('Part 1 Result: ', validPassportsPart1)

// Part 2
console.log('Part 2 Result: ', validPassportsPart2)
