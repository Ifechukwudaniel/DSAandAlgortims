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

function bfs(root) {
  let queue = [root];
  let array = [];

  while (queue.length) {
    let length = queue.length || 0;
    for (let i = 0; i < length; i++) {
      let node = queue.shift();
      array.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return array;
}
let arr = [3, 9, 20, 12, 13, 15, 7, 14, 18, 2, 0];
root = insertLevelOrder(arr, null, 0);
console.log(bfs(root));

arr = [1, 2, 3];
root = insertLevelOrder(arr, null, 0);
console.log(bfs(root));
