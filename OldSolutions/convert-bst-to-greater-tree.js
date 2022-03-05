const {
  insertLevelOrder,
  toArray,
} = require("./BinaryTree/BinaryTreeFromArray");

var convertBST = function (root) {
  if (root == null) return null;
  let sum = 0;
  var convert = function (node) {
    if (!node) return null;
    convert(node.right);
    convert(node.left);
    sum += node.val;
    node.val = sum;
    return node;
  };
  return convert(root);
};

let root = [4, 1, 6, 0, 2, 5, 7, null, null, null, 3, null, null, null, 8];
root = insertLevelOrder(root, null, 0);
console.log(convertBST(root));
