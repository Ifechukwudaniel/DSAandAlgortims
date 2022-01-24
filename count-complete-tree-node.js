class TreeNode {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
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

const getTreeHeight = (root, count = 0) => {
  if (!root.left) return count;
  return getTreeHeight(root.left, ++count);
};

const nodeExists = (node, height, indexToFind) => {
  let left = 0;
  let right = Math.pow(2, height) - 1;
  let count = 0;
  while (count < height) {
    let midValue = Math.ceil((left + right) / 2);
    if (indexToFind >= midValue) {
      node = node.right;
      left = midValue;
    } else {
      node = node.left;
      right = midValue - 1;
    }
    count++;
  }
  return node !== null;
};

var countNodes = function (root) {
  if (!root) return 0;
  let height = getTreeHeight(root);

  if (height === 0) return 1;

  let upperBound = Math.pow(2, height) - 1;

  let left = 0;
  let right = upperBound;

  while (left < right) {
    let indexToFind = Math.ceil((left + right) / 2);
    if (nodeExists(root, height, indexToFind)) {
      left = indexToFind;
    } else {
      right = indexToFind - 1;
    }
  }
  return upperBound + (left + 1);
};

let root = insertLevelOrder([1, 2, 3, 4, 5, 6], null, 0);
console.log(countNodes(root));
