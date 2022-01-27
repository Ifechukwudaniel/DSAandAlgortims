const { insertLevelOrder } = require("./BinaryTreeFromArray");

function dfs(node, array = []) {
  if (node !== null) {
    array.push(node.val);
    dfs(node.left, array);
    dfs(node.right, array);
  }
  return array;
}

let arr = [3, 9, 20, 12, 13, 15, 7, 14, 18, 2, 0];
root = insertLevelOrder(arr, null, 0);
console.log(dfs(root));

arr = [1, null, 2];
root = insertLevelOrder(arr, null, 0);
console.log(dfs(root));
