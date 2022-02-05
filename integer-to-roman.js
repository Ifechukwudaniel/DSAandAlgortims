let symbols = {
  1: "I",
  5: "V",
  10: "X",
  50: "L",
  100: "C",
  500: "D",
  1000: "M",
};

var getRemainderSymbol = function (num) {
  let nth = [1, 10, 100];
  let numString = num.toString();
  let nthValue = numString.length - 1;
  let value = [numString[0]];

  for (let i = 0; i < nthValue; i++) {
    value.push("0");
  }

  let lower = parseInt(value.join(""));
  let upper = lower + nth[nthValue];

  return [`${symbols[upper - lower] + symbols[upper]}`, lower];
};

var intToRoman = function (num) {
  let romanNumerals = [];

  if (num > 3999) return "";

  while (num > 0) {
    if (num >= 1000) {
      romanNumerals.push(symbols["1000"]);
      num -= 1000;
      continue;
    }

    if (num >= 500 && num < 900) {
      romanNumerals.push(symbols["500"]);
      num -= 500;
      continue;
    }

    if (num >= 100 && num < 400) {
      romanNumerals.push(symbols["100"]);
      num -= 100;
      continue;
    }

    if (num >= 50 && num < 90) {
      romanNumerals.push(symbols["50"]);
      num -= 50;
      continue;
    }

    if (num >= 10 && num < 40) {
      romanNumerals.push(symbols["10"]);
      num -= 10;
      continue;
    }

    if (num >= 5 && num < 9) {
      romanNumerals.push(symbols["5"]);
      num -= 5;
      continue;
    }
    if (num >= 1 && num < 4) {
      romanNumerals.push(symbols["1"]);
      num -= 1;
      continue;
    } else {
      let [symbol, number] = getRemainderSymbol(num);
      romanNumerals.push(symbol);
      num -= number;
      continue;
    }
  }
  return romanNumerals.join("");
};

console.log(intToRoman(440));
console.log(intToRoman(940));
console.log(intToRoman(93));
console.log(intToRoman(4));
