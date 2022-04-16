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
 * @return {TreeNode}
 */
var convertBST = function (root) {
  if (root == null) return null;
  let sum = 0;
  var convert = function (node) {
    if (!node) return null;
    convert(node.right);
    sum += node.val;
    node.val = sum;
    convert(node.left);
    return node;
  };
  return convert(root);
};