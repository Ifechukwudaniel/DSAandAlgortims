const { insertLevelOrder } = require("./BinaryTreeFromArray");

var inorderTraversal = function (root) {
  if (root == null) return [];
  let array = [];

  let inOrder = (node) => {
    if (node == null) return;
    inOrder(node.left);
    inOrder(node.right);
    array.push(node.val);
    return array;
  };

  return inOrder(root);
};

let root = insertLevelOrder([1, null, 2, 3]);
console.log(inorderTraversal(root));
