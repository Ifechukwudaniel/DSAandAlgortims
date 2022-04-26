/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let result = 0;
    let n = arr.length;
    
    for (let i = 0; i < n; i++) {
        let end = i + 1;
        let start = n - i;
        let total = start * end;
        let odd = Math.ceil(total / 2);
        result += odd * arr[i];
    }
    
    return result;
};