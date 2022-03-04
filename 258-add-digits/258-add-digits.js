/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let tempNum = []
    if(num < 10) return num
    
    while(num > 9 ){
        tempNum= num.toString().split("")
         num = tempNum.reduce((a,b)=>parseInt(a)+ parseInt(b))
        console.log(num)
    }
    return num
};