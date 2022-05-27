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
           console.log(num)
           continue
        } 
        num =  num >> 1
        console.log(num)
        count++
    }
    return count
};