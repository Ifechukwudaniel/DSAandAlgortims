/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let hashMap = new Map()
    
    for(let i =0 ; i<strs.length; i++){
        let hash = strs[i].split('').sort((a,b)=>a.localeCompare(b)).join("")
        if(!hashMap.has(hash)){
           hashMap.set(hash,[strs[i]])
        }
        else {
            let prev= hashMap.get(hash)
            prev.push(strs[i])
            // hashMap.set(hash,prev)
        }
    }
    
    let values = Array(...hashMap.values())
    values = values.sort((a,b)=>a.length - b.length)
    return values
    
};