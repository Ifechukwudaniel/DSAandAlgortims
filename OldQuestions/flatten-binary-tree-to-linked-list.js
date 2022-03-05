const {
  insertLevelOrder,
  TreeNode,
  toArray,
} = require("./BinaryTree/BinaryTreeFromArray");

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (!root) return root;
  let prev = null;
  var flatOne = (node) => {
    if (!node) return;
    flatOne(node.right);
    flatOne(node.left);
    node.left = null;
    node.right = prev;
    prev = node;
    console.log(node);
  };
  flatOne(root);
  return root;
};

let root = insertLevelOrder([1, 2, 5, 3, 4, null, 6]);
flatten(root);
console.log(root);
// console.log(root);
