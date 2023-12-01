const fs = require("fs");
const input = fs.readFileSync("input.txt", "utf8").toString().split("\n");

const getDigitsByWords = (sum, curr) => {
  const numberWords = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  const matcher = curr.match(
    /(\d)|(one|two|three|four|five|six|seven|eight|nine)/gi
  );

  const firstMatch = matcher[0];
  const lastMatch = matcher[matcher.length - 1];

  console.log(matcher);
  console.log(lastMatch);

  const firstDigit =
    numberWords.indexOf(firstMatch) === -1
      ? firstMatch
      : numberWords.indexOf(firstMatch) + 1;

  const secondDigit =
    numberWords.indexOf(lastMatch) === -1
      ? lastMatch
      : numberWords.indexOf(lastMatch) + 1;

  return sum + parseInt(`${firstDigit}${secondDigit}`);
};

const resultPart2 = input.reduce(getDigitsByWords, 0);

console.log("RESULT PART 2: ", resultPart2);
