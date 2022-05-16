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
var deepestLeavesSum = function(root) {
    let queue = [root]
    let total = 0
    while(queue.length){
         let length = queue.length
         total = 0
         for (let i = 0; i<length; i++){
             let node = queue.shift()
             if(node.val) total+=node.val
             if(node.left) queue.push(node.left)
             if(node.right) queue.push(node.right)
         }
    }
    return total
    
};