const { insertLevelOrder } = require("./BinaryTree/BinaryTreeFromArray");

var findTarget = function (root, k) {
  let complement = {};
  var findComplement = (node) => {
    if (!node) return false;
    let target = k - node.val;
    console.log(k - node.val, complement[target]);
    if (complement[target]) return true;
    complement[node.val] = true;
    return findComplement(node.left) || findComplement(node.right);
  };

  //   console.log(complement);
  return findComplement(root);
};
let root = insertLevelOrder([5, 3, 6, 2, 4, null, 7]);
console.log(findTarget(root, 9));
