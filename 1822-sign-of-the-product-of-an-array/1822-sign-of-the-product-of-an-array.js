/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    
    let  product = 1n
    
    for(let n of nums){
        if(n == 0) return 0
         product*=BigInt(n)
    }
    
    if(product >0) return 1
    if(product <0) return -1
    
    return product 
};