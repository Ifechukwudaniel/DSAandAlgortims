const { insertLevelOrder } = require("./BinaryTreeFromArray");

function bfs(root) {
  let queue = [root];
  let array = [];

  while (queue.length) {
    let length = queue.length || 0;
    for (let i = 0; i < length; i++) {
      let node = queue.shift();
      array.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return array;
}
let arr = [3, 9, 20, 12, 13, 15, 7, 14, 18, 2, 0];
root = insertLevelOrder(arr, null, 0);
console.log(bfs(root));

arr = [1, 2, 3];
root = insertLevelOrder(arr, null, 0);
console.log(bfs(root));
