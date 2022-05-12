/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

function convert(s,numRows){
     if(numRows === 1 ) return s
     let result = [];
     let n = s.length
     let cycleLen = 2* numRows-2
     for(let i =0 ; i<numRows; i++){
         for (let j = 0; j + i < n; j += cycleLen) {
             // console.log(s[j+i], j+i)
            result.push(s[j+i])
             let middle =  j + cycleLen -i
            if(i!=0 && i!= numRows-1 && j + cycleLen -i < n) {
               result.push(s[middle])
            }
         
        }
     }
    return result.join("")
}
// class Solution {
//     public String convert(String s, int numRows) {

//         if (numRows == 1) return s;

//         StringBuilder ret = new StringBuilder();
//         int n = s.length();
//         int cycleLen = 2 * numRows - 2;

//         for (int i = 0; i < numRows; i++) {
//             for (int j = 0; j + i < n; j += cycleLen) {
//                 ret.append(s.charAt(j + i));
//                 if (i != 0 && i != numRows - 1 && j + cycleLen - i < n)
//                     ret.append(s.charAt(j + cycleLen - i));
//             }
//         }
//         return ret.toString();
//     }
// }