function canConstruct(targetString, prefixes) {
  let table = new Array(targetString.length + 1).fill(0).map(() => false);
  table[0] = true;

  for (let i = 0; i <= table.length - 1; i++) {
    if (table[i] == true) {
      for (let prefix of prefixes) {
        if (targetString.slice(i, i + prefix.length) === prefix)
          table[prefix.length + i] = true;
      }
    }
  }
  return table[targetString.length];
}

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true
console.log(
  canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "boar"])
); // true
console.log(
  canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
); // false

console.log(
  canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee8828383eeee", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
);
