/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    let difference  = null
    arr= arr.sort((a,b)=>a-b)
    for(let i= 0; i<arr.length ; i++){
        if(difference === null){
          difference = arr[i+1] - arr[i] 
        }
        if(arr[i+1] !== undefined && arr[i+1] - arr[i] !== difference){
           return false 
        }
    }
    return true
};