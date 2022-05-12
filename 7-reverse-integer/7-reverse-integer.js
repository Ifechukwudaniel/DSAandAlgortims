/**
 * @param {number} x
 * @return {number}
 */

var reverse = function(num) {
    // The max size
    let min = Math.pow(2, 31) * -1
    let max = Math.pow(2,31 ) -1
    
    ///result 
    let rev = 0;
    
    while(num !== 0){
        //if out of bound return 0
        if(rev>(max/10) || rev < (min/10)) return 0 
        
        
        let pop = num%10
        rev = rev*10 + pop
        num = num >0 ?  Math.floor(num/10) : Math.ceil(num/10)
    }
    return rev
};