/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (A) => {
   A = A.sort((a,b)=>a-b)
   let result = []
   for(let p1=0; p1<A.length; p1++){
       let p2 = p1+1
       let p3= A.length-1
       while(p3>p2){
           let sum = A[p1]+A[p2]+A[p3]
           if(sum === 0){
               result.push([A[p1],A[p2],A[p3]])
               while(p3>p2 && A[p2]===A[p2+1]){
                  p2++
               }
               p2--

               while(p3>p2 && A[p3]===A[p3-1]){
                  p3--
               }
               p3--
           }
           if(sum<0){
               p2++
           }
           if(sum>0){
               p3--
           }
       }
    while(p1<A.length-1 && A[p1]===A[p1+1]){
         p1++
     } 
   }
   return result
}