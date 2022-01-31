const { insertLevelOrder } = require("./BinaryTree/BinaryTreeFromArray");

var dfs = (node, min, max) => {
  if (!node) return false;
  if (node.val <= min || node.val >= max) return false;

  if (node.left) {
    if (!dfs(node.left, min, node.val)) return false;
  }

  if (node.right) {
    if (!dfs(node.right, node.val, max)) return false;
  }

  return true;
};

var isValidBST = function (root) {
  return dfs(root, -Infinity, Infinity);
};

let root = [2, 1, 3];
root = insertLevelOrder(root);
console.log(isValidBST(root));

root = [5, 1, 4, null, null, 3, 6];
root = insertLevelOrder(root);
console.log(isValidBST(root));
