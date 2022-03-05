/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if(num < 10) return num
    
    while(num > 9 ){
        num =  num.toString().split("").reduce((a,b)=>parseInt(a)+ parseInt(b))
    }
    return num
};