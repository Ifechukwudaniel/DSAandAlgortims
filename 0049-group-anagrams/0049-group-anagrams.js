/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let hash = new Map();
     
    for(let word of strs){
        let key = word.split("").sort().join("#")
        if(hash.has(key)){
            let data = hash.get(key)
            data.push(word)
        }
        else {
            hash.set(key , [word])
        }
    }
    return [...hash.values()]
};