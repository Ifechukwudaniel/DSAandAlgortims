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
var inOrder= function(node, vals=[]){
     if(node == null ) return 
     inOrder(node.left,vals)
     vals.push(node.val)
     inOrder(node.right,vals)
    
}


var increasingBST = function(root) {
    if(root == null) return null
    let list = []
    inOrder(root, list)
    let tree = new TreeNode(0)
    let cur = tree;
    for(let i of list) {
        cur.right = new TreeNode(i)
        cur = cur.right
    }
    return tree.right
};