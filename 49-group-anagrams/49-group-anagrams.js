/**
 * @param {string[]} strs
 * @return {string[][]}
 */

 const createHash = (string) => {
     let  array= new Array(26).fill(0)
     for(const letter of string){
        array[letter.charCodeAt(0) - 97]+= 1
     }
     return array.join('#')
}
var groupAnagrams = function(strs) {
    let hashMap = new Map() 
    for(let i =0 ; i<strs.length; i++){
        let hash = createHash(strs[i])
        if(!hashMap.has(hash)){
           hashMap.set(hash,[strs[i]])
        }
        else {
            let prev= hashMap.get(hash)
            prev.push(strs[i])
        }
    }
    
    let values = Array(...hashMap.values())
    values = values.sort((a,b)=>a.length - b.length)
    return values
    
};