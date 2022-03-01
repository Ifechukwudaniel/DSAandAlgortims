/**
 * @param {number} n
 * @return {number[]}
 */
var getBits = function (n){
    let bitsString =  (n >>> 0).toString(2)
    return bitsString.split('1').length -1
}
var countBits = function(n) {
    let result = []
    
    for( let i =0 ; i<=n ; i++){
        result.push(getBits(i))
    }
    
    return result
};