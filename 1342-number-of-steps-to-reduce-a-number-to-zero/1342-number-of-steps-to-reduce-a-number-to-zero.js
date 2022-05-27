/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let  count = 0
    while(num>0){
        if(num&1 == 1){
           num--
           count++  
           continue
        } 
        num =  num >> 1
        count++
    }
    return count
};