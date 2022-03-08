function canConstruct(targetString, prefixes, memo = {}) {
  if (targetString in memo) return memo[targetString];
  if (targetString.length === 0) return true;
  for (let prefix of prefixes) {
    if (targetString.indexOf(prefix) === 0) {
      let newString = targetString.slice(prefix.length);
      if (canConstruct(newString, prefixes, memo) === true) {
        memo[targetString] = true;
        return true;
      }
    }
  }
  memo[targetString] = false;
  return false;
}



console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true
console.log(
  canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "boar"])
); // true
console.log(
  canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
); // false

console.log(
  canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
);
