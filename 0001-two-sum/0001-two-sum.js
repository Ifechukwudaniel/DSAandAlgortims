/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    
    for (let i =0;i<nums.length; i++){
        let currentTarget =  target - nums[i]
        if(map.has(currentTarget)) {
          return [map.get(currentTarget),i]
        }
        map.set(nums[i],i)
    }
    return []
};