const { insertLevelOrder } = require("./BinaryTree/BinaryTreeFromArray");

var getHeight = (root) => {
  if (root == null) return -1;
  if (root.left == null && root.right == null) return 0;
  return 1 + Math.max(getHeight(root.left), getHeight(root.right));
};

let insertNodeValue = (node, array, row, l, r) => {
  if (node == null) return;
  if (row >= array.length) return;
  const middle = (r - l) / 2 + l;
  array[row][middle] = `${node.val}`;
  insertNodeValue(node.left, array, row + 1, l, middle - 1);
  insertNodeValue(node.right, array, row + 1, middle + 1, r);
};

var printTree = function (root) {
  let height = getHeight(root);
  let m = Math.pow(2, height + 1) - 1;
  let resArray = Array(height + 1)
    .fill([])
    .map(() => Array(m).fill(""));
  insertNodeValue(root, resArray, 0, 0, m - 1);
  return resArray;
};

let root = [1, 2, 3];
root = insertLevelOrder(root);
console.log(printTree(root));

// root = [1, 2, 5, 3, null, null, null, 4];
// root = insertLevelOrder(root);
// console.log(printTree(root));

root = [1, 2, 3, null, 4];
root = insertLevelOrder(root);
console.log(printTree(root));
