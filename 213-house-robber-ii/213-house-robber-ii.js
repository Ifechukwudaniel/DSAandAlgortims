/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length ==1) return nums[0]
    
    return Math.max(helper(nums.slice(1)),helper(nums.slice(0,-1)))
};

var helper = function(nums) {
    let rob1 =0; 
    let rob2=0;
    
    for(let n of nums){
        let temp = Math.max(n+rob1, rob2)
        rob1= rob2
        rob2= temp
    }
    return rob2
};