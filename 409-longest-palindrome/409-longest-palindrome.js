/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
   let matchSet = new Set();
   let match = 0 
   
   for( let i =0; i<s.length; i++){
       if(matchSet.has(s[i])){
         matchSet.delete(s[i])
         match+=2
       }
       else {
         matchSet.add(s[i])
       }
   }
    
    if(matchSet.size!==0){
        match++
    }
    
    return match
};