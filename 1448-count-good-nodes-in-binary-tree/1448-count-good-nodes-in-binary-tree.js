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

var goodNodes = function(root) {
    if(!root)  return 
    var maxFn = Math.max
    let count = 0
    var dfs = function(node, max){
        
        if(!node) return 

        if(node.val>=max) count++   
        dfs(node.left,maxFn(node.val,max), count)
        dfs(node.right,maxFn(node.val,max), count)
    }
    dfs(root, root.val)
    return  count
    // return count
};
