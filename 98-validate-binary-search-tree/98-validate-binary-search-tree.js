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

// var isValid = function(node, min, maz)
var isValidBST = function(root) {
     let queue= [[root, -Infinity, Infinity]]
     while(queue.length){
         let length = queue.length
         while(length){
             let item  = queue.shift()
             let node = item[0]
             let left = item[1]
             let right = item[2]
             if(node.val > left && node.val < right){
                 if(node.left){
                     queue.push([node.left,left,node.val])
                 }
                 if(node.right){
                     queue.push([node.right,node.val, right])
                 }
             }
             else return false
             length--
         }
     }
     return true
};