var balancedStringSplit = function (s) {
  let i = 0;
  let charCount = 0;
  let count = 0;
  while (i < s.length) {
    if (s[i] == "R") charCount += 1;
    if (s[i] == "L") charCount -= 1;
    if (charCount == 0) count++;
    i++;
  }
  return count;
};

let s = "RLRRLLRLRL";
console.log(balancedStringSplit(s));

s = "RLLLLRRRLR";
console.log(balancedStringSplit(s));

s = "LLLLRRRR";
console.log(balancedStringSplit(s));
