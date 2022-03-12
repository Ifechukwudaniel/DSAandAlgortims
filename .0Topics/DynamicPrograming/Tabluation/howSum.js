function howSum(targetSum, numbers) {
  let table = new Array(targetSum + 1).fill(0).map(() => null);
  table[0] = [];
  for (let i = 0; i < table.length; i++) {
    for (let num of numbers) {
      if (table[i] !== null) {
        if (table[num + i] !== undefined) table[num + i] = [...table[i], num];
      }
    }
  }
  return table[targetSum];
}

// m = target sum
// n = number.length
// brute force
// time  O(n^m+m)
// space O(m)

// optimized
///  time O(n+m)
///  space O(m^2)

console.log(howSum(7, [2, 3])); ///true
console.log(howSum(7, [5, 3, 4, 7])); ///true
console.log(howSum(7, [2, 4])); ///false
console.log(howSum(8, [2, 3, 5])); ///true
console.log(howSum(30000, [15000, 10000])); ///true
