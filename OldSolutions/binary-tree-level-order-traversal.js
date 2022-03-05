const { insertLevelOrder } = require("./BinaryTree/BinaryTreeFromArray");

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
