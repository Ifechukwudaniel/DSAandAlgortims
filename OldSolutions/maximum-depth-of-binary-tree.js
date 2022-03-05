const { insertLevelOrder } = require("./BinaryTree/BinaryTreeFromArray");

var maxDepth = function (root, count = 0) {
  if (root === null) return count;
  count++;
  return Math.max(maxDepth(root.left, count), maxDepth(root.right, count));
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
root = insertLevelOrder(arr);

console.log(maxDepth(root));
