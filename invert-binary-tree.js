const {
  insertLevelOrder,
  toArray,
} = require("./BinaryTree/BinaryTreeFromArray");

var invertTree = function (root) {
  if (root == null) return null;
  let left = root.left,
    right = root.right;
  root.right = invertTree(left);
  root.left = invertTree(right);
  return root;
};

let arr = [4, 2, 7, 1, 3, 6, 9];
let root = insertLevelOrder(arr, null, 0);
console.log(toArray(invertTree(root)));

arr = [2, 1, 3];
root = insertLevelOrder(arr, null, 0);
console.log(toArray(invertTree(root)));
