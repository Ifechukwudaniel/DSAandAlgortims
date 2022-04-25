/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let numbers = []
    while (n>0){
        numbers.push(n % 10)
        n =  Math.trunc(n /10)
     }
     numbers = numbers.reverse()
     let product = 1
     let sum = 0
     for (let num of  numbers){
         product*= num
         sum+= num
     }
    console.log(product, sum)
    return product -sum
    
};