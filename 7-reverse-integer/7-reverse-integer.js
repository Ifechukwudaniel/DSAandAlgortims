/**
 * @param {number} x
 * @return {number}
 */

var reverse = function(num) {
    let min = Math.pow(2, 31) * -1
    let max = Math.pow(2,31 ) -1
    let rev = 0;
    while(num !== 0){
        if(rev>(max/10) || rev < (min/10)) return 0 
        let pop = num%10
        rev = rev*10 + pop
        num = Math.trunc(num/10)
    }
    return rev
};