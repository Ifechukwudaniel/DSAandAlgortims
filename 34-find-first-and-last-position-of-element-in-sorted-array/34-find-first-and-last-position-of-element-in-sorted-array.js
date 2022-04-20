/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let answer = [-1, -1];
  answer[0] = findFirst(nums, target);
  answer[1] = findLast(nums, target);
  return answer;
};

var findFirst = function (nums, target) {
  let l = 0,
    r = nums.length - 1,
    idx = -1;
  while (l <= r) {
    let pivot = Math.floor((r + l) / 2);
    if (nums[pivot] >= target) r = pivot - 1;
    else l = pivot + 1;
    if (nums[pivot] == target) idx = pivot;
  }
  return idx;
};

var findLast = function (nums, target) {
  let l = 0,
    r = nums.length - 1,
    idx = -1;
  while (l <= r) {
    let pivot = Math.floor((r + l) / 2);
    if (nums[pivot] <= target) l = pivot + 1;
    else r = pivot - 1;
    if (nums[pivot] == target) idx = pivot;
  }
  return idx;
};


/**
   [5,7,7,8,8,10]
    ^     ^     ^
    l     m     r
    
    [5,7,7,8, 8, 10]
     ^     ^     ^
     l     m     r
    
**/