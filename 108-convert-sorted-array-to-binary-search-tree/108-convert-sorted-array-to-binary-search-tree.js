/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

var buildBST = function(nums,l,r) {
    if(l>=r)return null
    let mid = l + Math.floor((r-l)/2)
    let newNode = new TreeNode(nums[mid])
    newNode.left = buildBST(nums,l,mid)
    newNode.right = buildBST(nums,mid+1,r)
    return newNode
};

var sortedArrayToBST = function(nums) {
    return buildBST(nums,0,nums.length)
};