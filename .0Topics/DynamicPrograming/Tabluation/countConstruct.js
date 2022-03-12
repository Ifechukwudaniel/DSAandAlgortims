function countConstruct(targetString, prefixes) {
  let table = new Array(targetString.length + 1).fill(0).map(() => 0);
  table[0] = 1;
  for (let i = 0; i < table.length; i++) {
    if (table[i] > 0) {
      for (let prefix of prefixes) {
        if (targetString.slice(i, i + prefix.length) === prefix) {
          table[prefix.length + i] += table[i];
        }
      }
    }
  }
  return table[targetString.length];
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
  ])
);

/*
  [1,0,0,0,0,0,0]
   p u r p l e

  ["purp", "p", "ur", "le", "purpl"]
  [1,1,0,1,2,1,2]
   p u r p l e


  [1,0,0,0,0,0,0]
   a b c d e f

  ['a',"bc","ab", "abc", "cd", "def", "abcd"]
  [1,1,1,2,2,0,2]
   a b c d e f
*/
