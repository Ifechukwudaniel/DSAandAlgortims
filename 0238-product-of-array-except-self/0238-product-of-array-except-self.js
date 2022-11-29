/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let answer = new Array(nums.length).fill(1)
    
    let prefix = 1
    for(let i =0 ; i<nums.length-1; i++){
        answer[i+1] = prefix*nums[i]
        prefix*=nums[i]
    }
    
    let postfix= 1
    for(let i =nums.length-1; i>0; i--){
        answer[i-1] = answer[i-1]*postfix*nums[i]
        postfix*=nums[i]
    }
    console.log(answer)
    return answer
};