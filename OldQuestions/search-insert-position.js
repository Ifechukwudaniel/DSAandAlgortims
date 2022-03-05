var searchInsert = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (nums[mid] == target) return mid;
  }
};

console.log(searchInsert([1, 3, 5, 6], 0));



let mid = Math.floor((left+ (right-left)/2))