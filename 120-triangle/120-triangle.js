/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let cache = triangle[triangle.length - 1]
    
    for(let i = triangle.length -2 ; i>=0; i--){
        for (let j = 0 ; j< triangle[i].length; j++){
          cache[j] = triangle[i][j]+Math.min(cache[j], cache[j+1])
        }
    }
    
    return cache[0]
};