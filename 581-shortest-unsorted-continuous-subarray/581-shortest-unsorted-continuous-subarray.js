/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    
    // cloning the array
    const sortedNums = nums.slice(0);
    // sorting the cloned array
    sortedNums.sort((a,b) => { return a-b});
    
    // start and end pointer
    let start = nums.length-1, end = 0;
    
    // looping to compare the values of nums and sorted nums
    for(let i = 0; i < nums.length; i++){
        // if value of num and sorted num is not equal, we assign the index value to start and end pointer
        if(nums[i]!=sortedNums[i]){
            start = Math.min(start,i);
            end = Math.max(end,i);
        }
    }
    
    if(end <= start) return 0;
    return end-start+1;
    
};