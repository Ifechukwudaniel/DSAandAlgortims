const {
  insertLevelOrder,
  TreeNode,
} = require("./BinaryTree/BinaryTreeFromArray");

var buildTree = function (preorder, inorder) {
  p = i = 0;
  build = function (stop) {
    if (inorder[i] != stop) {
      var root = new TreeNode(preorder[p++]);
      root.left = build(root.val);
      i++;
      root.right = build(stop);
      return root;
    }
    return null;
  };
  return build();
};

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
console.log(buildTree([-1], [-1]));
