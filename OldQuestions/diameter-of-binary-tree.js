const { insertLevelOrder } = require("./BinaryTree/BinaryTreeFromArray");

var diameterOfBinaryTree = function (root, count = 0) {
  if (root == null) return count;
  count++;
  return Math.max(
    diameterOfBinaryTree(root.left, count),
    diameterOfBinaryTree(root.right, count)
  );
};
let root = insertLevelOrder([1, 2, 3, 4, 5], null, 0);
console.log(diameterOfBinaryTree(root));
