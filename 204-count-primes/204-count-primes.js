/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  if(n<2) return []
  let table = new Uint8Array(n).fill(true)
  table[0]= false
  table[1] = false
    
  for (let i = 2; i * i < n; i++) {
    if (!table[i]) continue;
    for (let j = i * i; j < n; j += i) table[j] = false;
  }

   let count = 0
   for(let i =2; i<=table.length; i++){
      if(table[i] == true) count =count+1
   }


 return count
};