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
var sumOfLeftLeaves = function(root) {
     let res= 0
    var getLeftLeaves= function(node,isLeft){
        if(!node) return 
        if(!node.left && !node.right && isLeft ) res+=node.val
        getLeftLeaves(node.left,true)
        getLeftLeaves(node.right,false)
    }
    getLeftLeaves(root, false)
    return res
};