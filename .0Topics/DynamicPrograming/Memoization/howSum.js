function howSum(targetSum, numbers, memo = {}) {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (const num of numbers) {
    let remainder = targetSum - num;
    let remainderResult = howSum(remainder, numbers, memo);
    if (remainderResult !== null) {
      memo[targetSum] = [...remainderResult, num];
      return memo[targetSum];
    }
  }
  memo[targetSum] = null;
  return null;
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
console.log(howSum(30005, [7, 2, 4, 5, 6, 7, 8])); ///true
