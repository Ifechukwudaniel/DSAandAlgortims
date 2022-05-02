/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let answer = []
    
    for( let num of nums){
        if(num%2 ==0){
            answer.push(num)
        }
    }
    
   for( let num of nums){
        if(num%2 ==1){
            answer.push(num)
        }
    }
    return answer
};