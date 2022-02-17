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
 * @return {number}
 */
var maxDepth = function(root) {
    var getDepth = (node, count)=>{
        if(!node) return count
        count++
        return Math.max(getDepth(node.left,count),getDepth(node.right,count))
    }
    return getDepth(root,0)
};