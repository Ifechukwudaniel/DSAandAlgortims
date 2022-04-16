/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0, right = nums.length -1
    
    while (left <= right){
      let pivot = Math.floor((left+right)/2)
      let  found = nums[pivot]
      if(found == target) return pivot
      if(found > target) right = pivot- 1
      if(found < target) left = pivot +1
    }
    
    return -1
};