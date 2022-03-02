/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */ 


var numMatchingSubseq = function(s, words) {
  let hashMap =  new Map()
   for (let i =0 ; i<s.length ; i++){
      if(!hashMap.has(s[i])){
          hashMap.set(s[i],[i])
      } 
      else hashMap.get(s[i]).push(i)
   }

   let count = 0
   
   for (let i=0; i<words.length; i++){
      let prev = -1
      let matchFlag = true;
      for(let char of words[i] ){
        if(!hashMap.has(char)){
            matchFlag = false
            break
        }
        else {
          let charPos = hashMap.get(char)
          let r= charPos.length -1
          let l = 0
          while(l<r){
             let mid = Math.floor((r + l) / 2);
             if(charPos[mid] < prev) l = mid+1 
             else  r  = mid
           }
          if(charPos[l] <  prev) {
              matchFlag = false;
              break
          }
          prev = charPos[l]+1
         }
     }
     if(matchFlag) count++
   }
   return count
};