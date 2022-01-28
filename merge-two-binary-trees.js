const {
  insertLevelOrder,
  TreeNode,
} = require("./BinaryTree/BinaryTreeFromArray");

var mergeTrees = function (root1, root2) {
  if (!root1) return root2;
  if (!root2) return root1;
  root1.val += root2.val;
  root1.left = mergeTrees(root1.left, root2.left);
  root1.right = mergeTrees(root1.right, root2.right);
  return root1;
};

let root1 = [1, 3, 2, 5],
  root2 = [2, 1, 3, null, 4, null, 7];
root1 = insertLevelOrder(root1);
root2 = insertLevelOrder(root2);
console.log(mergeTrees(root1, root2));
