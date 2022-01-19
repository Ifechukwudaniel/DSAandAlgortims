var findPeakElement = function (nums) {
  let maxIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1]) maxIndex = i;
    if (nums[i] < nums[i + 1]) maxIndex = i + 1;
  }
  return maxIndex;
};

let nums = [1, 2];

console.log(findPeakElement(nums));

nums = [3, 2, 1];

console.log(findPeakElement(nums));

nums = [1, 2, 3, 1];

console.log(findPeakElement(nums));

nums = [1, 2, 1, 3, 5, 6, 4, 10];

console.log(findPeakElement(nums));
