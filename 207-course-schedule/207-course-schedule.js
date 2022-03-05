/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */


var canFinish = function(numCourses, prerequisites) {
  let graph = new Array(numCourses).fill(0).map(()=>[])
  
  for(let i =0 ; i <prerequisites.length; i++){
     let pair =  prerequisites[i]
     graph[pair[1]].push(pair[0])
  }
  
  let seen = new Map() 

  const dfs = function(crs){
      if(seen.has(crs)) return false
      if(graph[crs] === []) return true 
      seen.set(crs, true)
      
      for(let pre of graph[crs]){
         if(!dfs(pre)) return false
      }
      seen.delete(crs)
      graph[crs]=[]
      return true
    }
   for( let i =0; i<numCourses; i++){
      if(!dfs(i)) return false 
   }
   return true
};