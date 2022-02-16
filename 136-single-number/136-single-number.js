/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function (nums) {
  nums = nums.sort();
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    count++;
    if (nums[i] != nums[i + 1] && count == 1) return nums[i];
    if (nums[i] != nums[i + 1] && count == 2) count = 0;
  }
}; 