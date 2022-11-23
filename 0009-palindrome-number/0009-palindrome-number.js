/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0) return false
    if(x<10) return true
    
    // revese and integer 
    let copy = x
    let res = 0;
    while(copy!=0){
        let pop = copy % 10;
        res = res * 10+ pop
        // console.log(copy, res)
        copy = Math.floor(copy/10)
    }
    return x == res
};