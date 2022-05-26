/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
   let answer =[]
   
   for(let i =0; i<=n; i++){
       let count = 0
       let x=i
       while(x>0){
           if(x&1==1) count++
          x = x >> 1 
           // console.log(x)
       }
       answer.push(count)
       
   }
    return answer
};