var sortedArrayToBST = function(nums) {
    let left = 0; 
    let right = nums.length -1;
    
    let createTree = function(arr, left, right) {
        if (left > right) return null;
        
    var mid = Math.floor(left + (right - left) / 2);
        
        let node = new TreeNode(nums[mid]);
        node.left = createTree(arr, left, mid-1);
        node.right = createTree(arr, mid+1, right);
            
        return node;
    }
    return createTree(nums, 0, nums.length-1)
};