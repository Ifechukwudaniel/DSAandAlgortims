function TreeNode(val) {
  this.left = null;
  this.right = null;
  this.val = val;
}

function createBinaryTree(arr, root, i) {}

let arr = [3, 9, 20, null, null, 15, 7];
root = insertLevelOrder(arr, null, 0);
console.log(dfs(root));

arr = [1, null, 2];
root = insertLevelOrder(arr, null, 0);
console.log(dfs(root));
