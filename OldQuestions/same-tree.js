const { insertLevelOrder } = require("./BinaryTree/BinaryTreeFromArray");
var isSameTree = function (p, q) {
  if (p !== null && q == null) return false;
  if (p == null && q !== null) return false;

  if (p !== null && q !== null) {
    if (p.val !== q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }
  return true;
};

let p = [1, 2, 3],
  q = [1, 2, 3];
p = insertLevelOrder(p, null, 0);
q = insertLevelOrder(q, null, 0);
console.log(isSameTree(p, q));

(p = [1, 2]), (q = [1, null, 2]);
p = insertLevelOrder(p, null, 0);
q = insertLevelOrder(q, null, 0);
console.log(isSameTree(p, q));

(p = [1, 2, 1]), (q = [1, 1, 2]);
p = insertLevelOrder(p, null, 0);
q = insertLevelOrder(q, null, 0);
console.log(isSameTree(p, q));
