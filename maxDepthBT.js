function TreeNode(val) {
  this.left = null;
  this.right = null;
  this.val = val;
}

// Function to insert nodes in level order
function insertLevelOrder(arr, root, i) {
  // Base case for recursion
  if (i < arr.length && arr[i] !== null) {
    let temp = new TreeNode(arr[i]);
    root = temp;
    root.left = insertLevelOrder(arr, root.left, 2 * i + 1);
    root.right = insertLevelOrder(arr, root.right, 2 * i + 2);
  }
  return root;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
root = insertLevelOrder(arr, null, 0);

// Using Dfs count the items 
// And compare the right and left for the greater depth
var maxDepth = function (root, count = 0) {
  if (root === null) return count;
  count++;
  return Math.max(maxDepth(root.left, count), maxDepth(root.right, count));
};

console.log(maxDepth(root));
