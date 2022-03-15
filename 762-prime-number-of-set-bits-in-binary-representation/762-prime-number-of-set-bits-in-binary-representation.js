/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */

function isPrime(num) {
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}

const countBit = (n)=>{
    n = n.toString(2).split("0").join("").length
    return n
}
var countPrimeSetBits = function(left, right) {
    let count =0
    for(let i = left; i<= right; i++){
        let bitCount = countBit(i)
        let isprime = isPrime(bitCount)
        if(isprime) count++
    }
    return count
};