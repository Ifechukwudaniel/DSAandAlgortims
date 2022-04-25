/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count =0 ;
    while( n >0){
        // console.log(n>>1, n&1)
        if(n&1 == 1) ++count
        n= n >>> 1
    }
    return count
};