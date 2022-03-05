var threeSum = function (nums) {
  let solution = [];
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    let l = i + 1,
      r = nums.length - 1;
    while (l < r) {
      sum = nums[i] + nums[l] + nums[r];
      if (sum > 0) r--;
      if (sum < 0) l++;
      else {
        solution.push([nums[i], nums[l], nums[r]]);
        l++;
      }
    }
  }
  return solution;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));

// let s = { 0: 0 };
// console.log(s);
// if (s.hasOwnProperty(0)) {
//   console.log("jdjdj");
// }

// let i = 1;
// console.log(++i);
// console.log(i);
