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

var rightSideViewBfs = function (root) {
  if (!root) return [];
  let queue = [root];
  let result = [];

  while (queue.length) {
    let length = queue.length || 0,
      count = 0;
    while (count < length) {
      let node = queue.shift();
      count++;
      if (count === length) result.push(node.val);
      if (node["left"]) queue.push(node["left"]);
      if (node["right"]) queue.push(node["right"]);
    }
  }
  return result;
};

let traversal = function (node, array, count) {
  if (!node) return;
  if (count >= array.length) {
    array.push(node.val);
  }
  if (node.right) traversal(node.right, array, count + 1);
  if (node.left) traversal(node.left, array, count + 1);
};
var rightSideViewDfs = function (root) {
  if (!root) return [];
  let result = [];
  traversal(root, result, 0);
  return result;
};
let arr = [1, null, 2, null, 5, 4, 6, 3];
root = insertLevelOrder(arr, null, 0);
console.log(rightSideViewDfs(root));
