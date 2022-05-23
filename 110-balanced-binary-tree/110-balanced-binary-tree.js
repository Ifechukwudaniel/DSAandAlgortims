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
 * @return {boolean}
 */
var isBalanced = function(root) {
    let flag = true
    var getHeight= function (node, height){
        if(!node) return 0 
        
       let right =   getHeight(node.right, height+1)
        let left = getHeight(node.left, height+1)
        
      if(Math.abs(right  - left) > 1){
          flag = false
      }
        
        return Math.max(right, left)+1
    }
    getHeight(root,0)
    return flag   
};