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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if(!root) return []
    let queue= [root]
    let result = []
    while(queue.length){
        let n = queue.length
        for(let i =0; i<n; i++){
            let node = queue.shift()
            // console.log(node.val,i,n)
            if(i == n- 1) result.push(node.val)
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
    }
    return result
};