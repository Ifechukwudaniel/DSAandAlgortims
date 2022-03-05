const { insertLevelOrder } = require("./BinaryTree/BinaryTreeFromArray");

var postorderTraversal = function (root) {
  if (root == null) return [];
  let array = [];

  let postOrder = (node) => {
    if (node == null) return;
    postOrder(node.left);
    postOrder(node.right);
    array.push(node.val);
    return array;
  };

  return postOrder(root);
};

let root = insertLevelOrder([1, null, 2, 3]);
console.log(postorderTraversal(root));
