const { insertLevelOrder } = require("./BinaryTree/BinaryTreeFromArray");

var dfs = (root) => {
  if (root == null) return 0;
  return Math.max(dfs(root.left), dfs(root.right)) + 1;
};
var isBalanced = function (root) {
  if (!root) return true;
  let left = dfs(root.left);
  let right = dfs(root.right);
  if (!isBalanced(root.left)) return false;
  if (!isBalanced(root.right)) return false;
  return Math.abs(left - right) <= 1;
};

let root = [3, 9, 20, null, null, 15, 7];
root = insertLevelOrder(root);
console.log(isBalanced(root));

root = [1, 2, 2, 3, 3, null, null, 4, 4];
root = insertLevelOrder(root);
console.log(isBalanced(root));

root = [1, null, 2, null, 3, null];
root = insertLevelOrder(root);
console.log(isBalanced(root));
