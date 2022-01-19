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

var levelOrder = function (root) {
  if (!root) return [];
  let queue = [root];
  let levelTraversal = [];

  while (queue.length) {
    let traversed = [];
    let length = queue.length || 0;
    for (let i = 0; i < length; i++) {
      let node = queue.shift();
      traversed.push(node.val);
      if (node["left"]) queue.push(node["left"]);
      if (node["right"]) queue.push(node["right"]);
    }
    levelTraversal.push(traversed);
  }
  return levelTraversal;
};

let arr = [3, 9, 20, null, null, 15, 7];
root = insertLevelOrder(arr, null, 0);
console.log(levelOrder(root));

arr = [1, null, 2];
root = insertLevelOrder(arr, null, 0);
console.log(levelOrder(root));
