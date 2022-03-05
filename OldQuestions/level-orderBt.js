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

let arr = [3, 9, 20, null, null, 15, 7];
let root = insertLevelOrder(arr, null, 0);

var traversal = function (node, array = []) {
  if (node === null) return array;
  array.push([node.val]);
  return array.push(
    traversal(node.left, [array]),
    traversal(node.right, [array])
  );
};

// var levelOrder = function (root) {};
console.log(traversal(root));
