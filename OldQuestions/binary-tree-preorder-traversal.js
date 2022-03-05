const { insertLevelOrder } = require("./BinaryTree/BinaryTreeFromArray");

var preorderTraversal = function (root) {
  if (root == null) return [];

  let array = [];

  function preorder(node) {
    if (node == null) return;
    array.push(node.val);
    preorder(node.left);
    preorder(node.right);
    return array;
  }

  return preorder(root);
};

let root = insertLevelOrder([1, null, 2, 3]);
console.log(preorderTraversal(root));
