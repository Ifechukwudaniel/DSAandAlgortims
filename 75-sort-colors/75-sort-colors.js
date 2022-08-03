/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let count = [0,0,0]
    let countPos = 0
    
    for(let i =0; i<nums.length; i++){
        let index = nums[i]
        count[index] +=1
    }
    
    for(let i =1; i<count.length; i++){
        count[i]+= count[i-1] 
    }
    
    for(let i =0; i<count[0]; i++){
        nums[i] = 0;
    }
    
    for(let i =count[0]; i<count[1]; i++){
        nums[i] = 1
    }
    
    for(let i =count[1]; i<count[2]; i++){
        nums[i] = 2
    }
    
};