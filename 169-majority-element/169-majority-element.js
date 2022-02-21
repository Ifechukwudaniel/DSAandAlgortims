/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let nLength = Math.floor(nums.length/2)
    nums= nums.sort((a,b)=>a-b)
    let occurance = 0
    let prev = 0
    for(let i=0; i<nums.length; i++){
      if(prev !== nums[i]) {
          occurance = 1
          prev=nums[i]
      }
      else occurance++
      if(occurance > nLength) return nums[i]
    }
};


// [3,2,3] 
// [2,3,3]
// [2,2,1,1,1,2,2]
// [1,1,1,2,2,2,2]