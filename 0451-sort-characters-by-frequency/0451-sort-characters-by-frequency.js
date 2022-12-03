/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
     let map = new Map();
     for(let char of s){
         if(!map.get(char)){
              map.set(char,1)
             continue
         }
         let count = map.get(char)
         map.set(char,count+1)
     }
    let arr= [...map].sort((x,y)=>y[1]-x[1])
    return arr.map(([char, freq])=>char.repeat(freq)).join("")
};