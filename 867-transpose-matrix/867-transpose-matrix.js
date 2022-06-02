/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    // console.log(matrix[0].length)
    let newMatricx= []
    for(let i =0; i<matrix[0].length; i++){
        let nowList = []
        for(let j =0; j<matrix.length; j++){
            nowList.push(matrix[j][i])
        }
        newMatricx.push(nowList)
    }
    return newMatricx
};