/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length !== t.length) return false
    let sMatch ={}
    let tMatch = {}
    for(let i= 0; i<s.length; i++){
        if(sMatch[s[i]] == undefined) sMatch[s[i]]= t[i]
        if(tMatch[t[i]] == undefined) tMatch[t[i]]= s[i]
        if(tMatch[t[i]] !== s[i] || sMatch[s[i]] !== t[i])  return false
    }
   return true  
};