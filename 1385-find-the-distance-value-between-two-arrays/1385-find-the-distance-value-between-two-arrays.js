/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) { 
    let count = 0
    for(let i=0; i<arr1.length; i++){
        let passes = true
        for(let j=0; j<arr2.length; j++){
         if(Math.abs(arr1[i] - arr2[j]) <= d)  passes= false
        }
      if(passes) count++
    }
    return count
};