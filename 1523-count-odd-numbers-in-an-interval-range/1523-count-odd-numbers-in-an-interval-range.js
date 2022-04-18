/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    let total = high-low
    let count = Math.floor((total) / 2)
    if(high%2 !==0 || low%2!==0) count++
    return count 
};