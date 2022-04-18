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
 * @param {number} k
 * @return {number}
 */
var inOrder = function(node,array=[]){
    if(node == null) return null
    inOrder(node.left, array)
    array.push(node.val)
    inOrder(node.right,array)
}
var kthSmallest = function(root, k) {
    let array =[]
    inOrder(root,array)
    return array[k-1]
};