/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let total= nums[0]
    for(let i =1; i<nums.length; i++){
        nums[i]+=nums[i-1]
    }
    return nums
};