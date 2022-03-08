function countConstruct(targetString, prefixes, memo = {}) {
  //   console.log(targetString);
  if (targetString in memo) return memo[targetString];
  if (targetString.length == 0) return 1;

  let totalCount = 0;
  for (let prefix of prefixes) {
    if (targetString.indexOf(prefix) === 0) {
      let currentCount = countConstruct(
        targetString.slice(prefix.length),
        prefixes,
        memo
      );
      totalCount += currentCount;
    }
  }
  memo[targetString] = totalCount;
  return totalCount;
}

console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true

console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"])); // true

console.log(
  countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "boar"])
); // true

console.log(
  countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
); // false

console.log(
  countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
    "f",
  ])
);
