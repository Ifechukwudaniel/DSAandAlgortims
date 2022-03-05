const { insertLevelOrder } = require("./BinaryTree/BinaryTreeFromArray");

var isMirror = function (root1, root2) {
  if (root1 === null && root2 === null) return true;

  if (root1 && root2 && root1.val === root2.val)
    return (
      isMirror(root1.left, root2.right) && isMirror(root1.right, root2.left)
    );

  return false;
};

var isSymmetric = function (root) {
  return isMirror(root, root);
};

let root = [1, 2, 2, 3, 4, 4, 3];
root = insertLevelOrder(root);
console.log(isSymmetric(root));

root = [1, 2, 2, null, 3, null, 3];
root = insertLevelOrder(root);
console.log(isSymmetric(root));
