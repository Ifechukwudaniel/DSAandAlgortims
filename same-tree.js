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
