/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let n = cost.length
    let cache = {}
    
    var minCost = function(i, cost){
      if(i<0) return 0
      if(i===0 || i===1 ) return cost[i]
      if(cache[i]) return cache[i]
      cache[i] = cost[i] + Math.min(minCost(i-1,cost),minCost(i-2,cost))
      return cache[i]
    }
    
    return Math.min(minCost(n-1,cost),minCost(n-2,cost) )
};