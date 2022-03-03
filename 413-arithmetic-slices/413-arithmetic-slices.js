/**
 * @param {number[]} nums
 * @return {number}
 */



var numberOfArithmeticSlices = function(nums) {
    let count = 0
    let temp = 0
    for (let i=2; i<nums.length; i++){
        console.log(nums[i],count)
        if(nums[i] - nums[i-1] == nums[i-1] - nums[i-2]){
            temp++
            count+= temp
        }
        else {
            temp=0
        }
    }
    return count
};