/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
   let min = 1, max= nums.length
   let set = new Set();
    
    for(let i =1; i<=max; i++){
        set.add(i)
    }
    
    for(let i =0; i<nums.length; i++){
        set.delete(nums[i])
    }
    
    return [...set]
};