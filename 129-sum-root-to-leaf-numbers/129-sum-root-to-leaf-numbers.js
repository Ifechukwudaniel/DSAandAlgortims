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
var sumNumbers = function(root) {
    if(!root.left && !root.right) return root.val
    let numberArray =  []
    inOrder(root, numberArray)
    let sum = 0
    for (let num of numberArray){
        sum= sum + (+num)
    }
    return  sum
};

var inOrder =  function(node, array,sofar=""){
    if (!node) return null 
    
    sofar+=node.val
    if(!node.left && !node.right) array.push(sofar)
    inOrder(node.left ,array,sofar) 
    inOrder(node.right, array,sofar,)
}

