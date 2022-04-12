/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let answer = 0
    let count =32
    
    while(count--){
        answer *= 2
        answer +=  (n & 1)  
        n = n >> 1
    }
    
    return answer
};