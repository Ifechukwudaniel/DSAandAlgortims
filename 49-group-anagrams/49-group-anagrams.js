/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map();
    
    for(let word of strs){
      let key = word.split("").sort().join("#")
      if(!map.has(key)){
         map.set(key,[word])
      }
      else{
           let data = map.get(key)  
           data.push(word)
      }
    }
    return [...map.values()]
};