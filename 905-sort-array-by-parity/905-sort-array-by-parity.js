/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    nums = nums.sort((a, b) => a%2 - b%2 || a-b)
    return nums
};