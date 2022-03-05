/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */


var dfs= function(currentID,graph, informTime){
  if(graph[currentID].length === 0) return 0
  let max = 0
  let employees = graph[currentID]
  for(let i =0; i<employees.length; i++){
      max = Math.max(max,dfs(employees[i],graph, informTime) )
  }
  return  max + informTime[currentID]
}


var numOfMinutes = function(n, headID, manager, informTime) {
    let graph = manager.map(()=>[])
    let l = 0
    for(let i = 0 ; i< manager.length; i++){
        if(manager[i]!==-1){
           let node = graph[manager[i]]
           node.push(i)
        }
    }
    
    return dfs(headID,graph, informTime)
};