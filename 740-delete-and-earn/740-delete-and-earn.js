/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
  const map = {};
  for (const num of nums) {
    if (!(num in map)) map[num] = 0;
    map[num]++;
  }

  let prevSum = 0;
  let currSum = 0;
  let prevKey = -1;

  for (let key in map) {
    const m = Math.max(prevSum, currSum);
    key = parseInt(key);
    if (key - 1 !== prevKey) {
      currSum = key * map[key] + m;
      prevSum = m;
    } else {
      currSum = key * map[key] + prevSum;
      prevSum = m;
    }
    prevKey = key;
  }

  return Math.max(prevSum, currSum);
};