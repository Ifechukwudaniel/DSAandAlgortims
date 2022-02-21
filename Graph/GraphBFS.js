function GraphDfs(graph) {
  let seen = {};
  let queue = [0];
  let ans = [];

  while (queue.length) {
    let vertex = queue.shift();
    ans.push(vertex);
    seen[vertex] = true;
    let connections = graph[vertex];
    for (let i = 0; i < connections.length; i++) {
      let connection = connections[i];
      if (!seen[connection]) queue.push(connection);
    }
  }
  return ans;
}

let graph = [[1, 3], [0], [3, 8], [4, 5, 2], [3, 6], [3], [4, 7, 10], [6], [2]];

console.log(GraphDfs(graph));
