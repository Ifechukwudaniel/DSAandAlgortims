/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    if(!graph.length) return false
    let colors = new Array(graph.length).fill(-1)
    let queue = []
    let seen = new Set()
    for(let i =0; i <graph.length; i++){
        if(seen.has(i)) continue 
        seen.add(i)
        queue.push(i)
        colors[i]= 1
        while(queue.length){
            let node =  queue.pop()
            for(let vartex of graph[node]){
                 console.log(vartex, node)
                if(!seen.has(vartex) && colors[vartex] == -1){
                    seen.add(vartex)
                    queue.push(vartex)
                    colors[vartex] = 1 - colors[node] 
                    continue
                    // console.log(seen, colors)
                }
               if(colors[vartex] == colors[node]) return false
            }
        }
    }
    return true
};