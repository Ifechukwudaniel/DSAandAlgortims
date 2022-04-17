/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
   for (let i=0 ; i < 2147483648; i++){
      let value =  Math.pow(i,2)
      if(value == num) return true
      if(value > num) return false
   }
    return false
};