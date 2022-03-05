const { insertLevelOrder } = require("./BinaryTree/BinaryTreeFromArray");

var sumNumbers = function (root) {};

let root = [1, 2, 3];
root = insertLevelOrder(root);
console.log(sumNumbers(root));

root = [4, 9, 0, 5, 1];
root = insertLevelOrder(root);
console.log(sumNumbers(root));
