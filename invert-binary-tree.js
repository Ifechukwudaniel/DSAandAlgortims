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

var invertTree = function (root) {
  if (root == null) return null;

  let left = root.left,
    right = root.right;
  root.right = invertTree(left);
  root.left = invertTree(right);
  return root;
};

let arr = [4, 2, 7, 1, 3, 6, 9];
let root = insertLevelOrder(arr, null, 0);
console.log(root);
invertTree(root);
console.log(root);

arr = [2, 1, 3];
root = insertLevelOrder(arr, null, 0);
console.log(root);
invertTree(root);
