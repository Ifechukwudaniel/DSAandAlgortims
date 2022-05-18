/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
// Tarjan's algo
var criticalConnections = function(n, connections) {
    const graph = Array(n).fill().map(() => []);    
    for (let [a, b] of connections) {
        graph[a].push(b);
        graph[b].push(a);
    }

    const critical = [];
    const visited = new Set();
    const hash = {};
    let time = 0;
    
    function dfs(idx = 0, parent = 0) {        
        hash[idx] = {discover: time, low: time};
        time++;
        visited.add(idx);
        for (let edge of graph[idx]) {
            if (edge === parent) continue;
            // If the current idx is connected to an edge with a low less than the current low,
            // this mean these two points are part of a connected component,
            // so there is more than one path to connect these two points
			// Update the current idx's low to reflect this
            if (visited.has(edge)) {
                hash[idx].low = Math.min(hash[idx].low, hash[edge].low);
            }
            else {
                hash[idx].low = Math.min(hash[idx].low, dfs(edge, idx).low);
            }
            // If the current idx's discover time is less than it's edge's low
            // Then, the edge does not connect to another edge that is connected to the current idx
            // Thus, the edge is a critical bridge
            if (hash[idx].discover < hash[edge].low) critical.push([idx, edge]);
        }
        return hash[idx];
    }
    
    dfs();
    return critical;
};