var singleNumber = function (nums) {
  nums = nums.sort();
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    count++;
    if (nums[i] != nums[i + 1] && count == 1) return nums[i];
    if (nums[i] != nums[i + 1] && count == 3) count = 0;
  }
};

let nums = [1, 1, 2, 1];
console.log(singleNumber(nums));

nums = [4, 1, 1, 2, 2, 1, 2];
console.log(singleNumber(nums));

nums = [1];
console.log(singleNumber(nums));
