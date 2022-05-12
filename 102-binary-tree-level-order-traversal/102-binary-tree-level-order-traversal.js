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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return []
    let answer = []
    let queue= [root]
    while(queue.length){
        let level =  []
        let length = queue.length 
        for(let i = 0 ; i <length; i++){
          let node = queue.shift()
          if(node) level.push(node.val)
          if(node.left) queue.push(node.left)
          if(node.right) queue.push(node.right)   
        }
        answer.push(level)
    }
    return answer
};