//Get The compliment  but store the current value in either  your  map or object 
//if the compliment exist in the  the current value list return your two sum

var twoSum = function (nums, target) {
  let complementList = {};
  for (let i = 0; i < nums.length; i++) {
    let compliment = target - nums[i];
    if (complementList[compliment] !== undefined) {
      return [i, complementList[compliment]];
    }
    complementList[nums[i]] = i;
  }
  return [];
};

let nums = [2, 7, 11, 15],
  target = 9;
console.log(twoSum(nums, target));

nums = [3, 2, 4];
target = 6;
console.log(twoSum(nums, target));

(nums = [3, 3]), (target = 6);

console.log(twoSum(nums, target));
