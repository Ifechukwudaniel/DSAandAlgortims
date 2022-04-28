/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function levelOrder(root: TreeNode | null): number[][] {
 if(!root) return []
 let queue:TreeNode[] = [root]
 let answer  = []
 while(queue.length){
     let currentArray:number[] = []
     let currentLength:number = queue.length
     for(let i = 0 ; i<currentLength ; i++){
         let node = queue.shift()
          currentArray.push(node.val)
         if(node.left) queue.push(node.left)
         if(node.right) queue.push(node.right)
     }
     answer.push(currentArray)
 }
 return answer
};