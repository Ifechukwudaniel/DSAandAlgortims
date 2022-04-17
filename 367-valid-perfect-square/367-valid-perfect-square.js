/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let l =0 , r=num
    while(l <= r){
        let pivot = Math.floor((l+r)/2)
        let value = Math.pow(pivot, 2)
        if(value == num ) return true
        if(value > num )  r = pivot - 1
        if(value < num )  l = pivot + 1
    }
    return false
};