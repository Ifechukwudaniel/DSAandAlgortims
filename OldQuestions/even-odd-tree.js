const {
  insertLevelOrder,
  toArray,
} = require("./BinaryTree/BinaryTreeFromArray");

var isEvenOddTree = function (root) {
  let queue = [root];
  let even = true;
  let level = 0;
  while (queue.length) {
    let length = queue.length;
    let lastValue = null;
    for (let i = 0; i < length; i++) {
      let node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      if (lastValue) {
      } else lastValue = node.val;
    }
    level++;
  }
  return true;
};

let root = [1, 10, 4, 3, null, 7, 9, 12, 8, null, null, 6, 2];
root = insertLevelOrder(root);
// console.log(toArray(root));
console.log(isEvenOddTree(root));

root = [5, 4, 2, 3, 3, 7];
root = insertLevelOrder(root);
// console.log(toArray(root));
console.log(isEvenOddTree(root));

root = [5, 9, 1, 3, 5, 7];
root = insertLevelOrder(root);
// console.log(toArray(root));
console.log(isEvenOddTree(root));
