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

function toArray(node, array = []) {
  if (node !== null) {
    array.push(node.val);
    toArray(node.left, array);
    toArray(node.right, array);
  }
  return array;
}

module.exports = {
  TreeNode,
  insertLevelOrder,
  toArray,
};
