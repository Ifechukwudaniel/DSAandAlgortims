/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
  var idx = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[idx] = nums[i];
      nums[i] = idx === i ? nums[i] : 0;
      idx++;
    }
  }
}