/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let returnLst = [[1]];
    
    if (numRows === 1) return returnLst;
    
    let temp = [1];
    let newlst = [1];
    for (let i = 1; i < numRows; i++) {
        for (let j = 1; j < temp.length; j++) {
            newlst.push((temp[j-1] + temp[j]));
        }
        newlst.push(1);
        temp = newlst;
        returnLst.push(temp);
        newlst = [1];
    }
    
    return returnLst;
};