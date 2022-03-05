function GraphDfs(graph) {
  let ans = [];
  let seen = {};
  let dfs = (vertex, graph, seen, ans) => {
    ans.push(vertex);
    seen[vertex] = true;
    let connections = graph[vertex];
    for (let i = 0; i < connections.length; i++) {
      let connection = connections[i];
      if (!seen[connection]) {
        dfs(connection, graph, seen, ans);
      }
    }
  };
  dfs(0, graph, seen, ans);
  return ans;
}

let graph = [[1, 3], [0], [3, 8], [4, 5, 2], [3, 6], [3], [4, 7], [6], [2]];

console.log(GraphDfs(graph));
