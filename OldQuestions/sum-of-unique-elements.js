var sumOfUnique = function (nums) {
  let bool = new Array(nums.length);

  for (let i = 0; i < bool.length; i++) {
    bool[i] = true;
  }

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        bool[i] = false;
        bool[j] = false;
      }
    }
  }

  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (bool[i] === true) {
      sum += nums[i];
    }
  }

  return sum;
};

let nums = [1, 2, 3, 2];
console.log(sumOfUnique(nums));

nums = [1, 1, 1, 1, 1];
console.log(sumOfUnique(nums));

nums = [1, 2, 3, 4, 5];
console.log(sumOfUnique(nums));
