/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    costs = costs.sort((a,b) => (b[0] - b[1]) - (a[0] - a[1]));
    var minCost = 0, i;
    for(i = 0; i < costs.length/2; i++){
        minCost += costs[i][1];
    }
    for(i = costs.length/2; i < costs.length; i++){
        minCost += costs[i][0];
    }
    return minCost;
};