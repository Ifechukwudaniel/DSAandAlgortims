/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    if(n===0 ) return 0
    if(n<=2) return 1
    let array = new Array(n+1).fill(null).map(()=>0)
    array[0]=0
    array[1]=1
    array[2]=1
    
    for(let i= 2; i<=n; i++){
        array[i+1]=array[i]+ array[i-1]+array[i-2]
    }
    
    return array[n]
};