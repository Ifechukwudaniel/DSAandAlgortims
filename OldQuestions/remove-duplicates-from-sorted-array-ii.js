var removeDuplicates = function (nums) {
  let seen = {};
  let i = 0;
  let j = 1;

  while (j < nums.length) {
    if (!seen[`${nums[j]}`]) {
      seen[`${nums[j]}`] = 1;
    }
    if (nums[i] === nums[j]) {
      j++;
      continue;
    }
    if (nums[i] < nums[j]) {
      let temp = nums[i + 1];
      nums[i + 1] = nums[j];
      nums[j] = temp;
      j++;
      i++;
    }
  }
  return ++i;
};

console.log(removeDuplicates([1, 1, 2]));

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
