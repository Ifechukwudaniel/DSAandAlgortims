/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows===1 || s.length==1 || s.length<numRows) return s 
    let newString = ""
    let increment = 2*numRows-1
    for(let i =0; i< numRows;i++ ){
        newString+=s[i]
        let j = i
        while(j<=s.length){
            if(i>0 && i<numRows-1 && s[j+(increment-2*i)-1]!==undefined){
               newString+=s[j+(increment-2*i)-1] 
            }
            
            j = j+increment-1
            
            if( s[j] === undefined) continue 
               newString+=s[j]
            }
        }
    return newString
};

//.PAYPAL
// ISHIRING