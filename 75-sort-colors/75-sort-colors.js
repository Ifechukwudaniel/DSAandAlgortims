/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let count = [0,0,0]
    
    for ( let i =0; i <nums.length; i++){
        count[nums[i]]++
     }
    
    count[1]+= count[0]
    count[2] += count[1]
    
    for(let i = 0; i<count[0]; i++){
        nums[i] = 0
    }
    
    for(let i = count[0]; i<count[1]; i++){
        nums[i] = 1
    }
    
    for(let i = count[1]; i<count[2]; i++){
        nums[i] = 2
    }
};