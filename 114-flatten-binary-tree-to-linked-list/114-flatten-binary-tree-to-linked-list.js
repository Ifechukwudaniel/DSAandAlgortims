var flatten = function (root) {
  if (!root) return root;
  let prev = null
  var flatOne = (node) =>{
      if(!node) return 
      flatOne(node.right)
      flatOne(node.left)
      node.left= null
      node.right= prev
      prev= node
  }
  
  flatOne(root)
}