/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let nLength = Math.floor(nums.length/2)
    let count ={}
    
    
    for(let i=0; i<nums.length; i++){
       if(count[nums[i]]==undefined ) count[nums[i]]=1 
       else  count[nums[i]]+=1
       if(count[nums[i]] > nLength) return nums[i]
     }
};