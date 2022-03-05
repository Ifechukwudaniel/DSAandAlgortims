const { insertLevelOrder } = require("./BinaryTree/BinaryTreeFromArray");

var searchBST = function (root, val) {
  if (root == null) return null;
  if (root.val === val) return root;
  if (root.val > val) return searchBST(root.left, val);
  if (root.val < val) return searchBST(root.right, val);
};

let root = [4, 2, 7, 1, 3];
let val = 5;
console.log(searchBST(insertLevelOrder(root), val));
root = [4, 2, 7, 1, 3];
val = 2;
console.log(searchBST(insertLevelOrder(root), val));
