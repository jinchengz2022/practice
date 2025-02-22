// 前序遍历
// root left right
var preorderTraversal = function (root) {
  const res = [];
  const stk = [];
  stk.push(root);

  while (stk.length) {
    const node = stk.pop();

    res.push(node.val);

    if (node.right) {
      stk.push(node.right);
    }

    if (node.left) {
      stk.push(node.left);
    }
  }
  return res;
};

// function preOrder(root, arr) {
//   if (root === null) {
//       return;
//   }
//   arr.push(root.val);
//   preOrder(root.left, arr);
//   preOrder(root.right, arr);
// }

// function preorderTraversal(root) {
//   if (root === null) {
//       return [];
//   }
//   const result = [];

//   preOrder(root, result);

//   return result;
// };
