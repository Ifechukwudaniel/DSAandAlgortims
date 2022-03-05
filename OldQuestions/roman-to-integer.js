var romanToInt = function (s) {
  let valueMap = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let lastValue = 1001;
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    let currentValue = valueMap[s.charAt(i)];
    if (currentValue > lastValue) {
      answer -= lastValue * 2;
    }
    answer += currentValue;
    lastValue = currentValue;
  }
  return answer;
};

let s = "III";
console.log(romanToInt(s));

s = "MIV";
console.log(romanToInt(s));
