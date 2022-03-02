/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */ 


var numMatchingSubseq = function(s, words) {
   let count = 0
   let cache= {}
   
   var isSubSequence= function(s, word){
       if (word.length > s.length) return false;
    
       if (word.length === 0) return true;
       
       if(cache[word]) return cache[word]
       
        let i =0
        let j =0
        while(i<word.length&& j<s.length){
           if(word[i]=== s[j]){
               i++ 
               j++
           } 
           else  j++
        }
        cache[word] = i === word.length
        return  cache[word]
    }
   
   for(let i= 0; i<words.length; i++){
       if(isSubSequence(s, words[i])){
          count++
       }
   }
   return count
};