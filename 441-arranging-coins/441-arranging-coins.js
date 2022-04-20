/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let rowCount = 0, current = 1
    if (n ==1) return 1
    while(n>0){
        n = n - current 
        if(n>=0){
           current++
           rowCount++
        }
    }
    return rowCount
};