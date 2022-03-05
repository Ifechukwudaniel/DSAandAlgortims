/**
 * @param {number[]} nums
 * @return {string[]}
 */

function sumRan(a,b){
     if(a===b) return a.toString()
    return `${a}->${b}`
}

var summaryRanges = function(nums) {
    if(nums.length == 0) return []
  let ranges = []
  let startRange = nums[0]
   for(let i =0 ; i<=nums.length-1; i++){
       if(nums[i-1]+1 !== nums[i]  && i !== 0){
         ranges.push(sumRan(startRange,nums[i-1]))
         startRange = nums[i] 
       }
   }
   ranges.push(sumRan(startRange, nums[nums.length-1]))
   return ranges
};