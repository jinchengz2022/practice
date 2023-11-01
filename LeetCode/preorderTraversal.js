// root left right
var preorderTraversal = function (root) {
  const res = [];
  const stk = [];
  stk.push(root);

  while (stk.length) {
    const node = stk.pop();

    res.push(node.val);

    if(node.right) {
      stk.push(node.right)
    }

    if(node.left) {
      stk.push(node.left)
    }
  }
  return res;
};
