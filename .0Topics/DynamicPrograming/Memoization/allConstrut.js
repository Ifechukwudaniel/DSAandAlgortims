function allConstruct(targetString, wordBank, memo = {}) {
  if (targetString in memo) return memo[targetString];

  if (targetString === "") return [[]];

  let result = [];
  let targetWays = null;

  for (let word of wordBank) {
    if (targetString.indexOf(word) === 0) {
      let suffix = targetString.slice(word.length);
      let suffixWays = allConstruct(suffix, wordBank, memo);
      targetWays = suffixWays.map((way) => [word, ...way]);
      result.push(...targetWays);
    }
  }

  memo[targetString] = result;
  return result;
}

console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));

console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));

console.log(
  allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "boar"])
);

console.log(
  allConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
);

console.log(
  allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeez", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
);
