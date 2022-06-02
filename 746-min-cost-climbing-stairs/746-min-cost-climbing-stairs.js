/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let n = cost.length 
    let d1= cost[0]
    let d2= cost[1]
    
    for(let i =2; i<n; i++){
        let current = cost[i]+Math.min(d1, d2)
        d1 = d2
        d2= current
    }
    return Math.min(d1,d2)
};