import { TreeNode } from "./TreeNode";
// 中序遍历
// left root right

var inorderTraversal = function (root: TreeNode | null) {
  const res: any = [];
  const stk: any = [];
  while (root || stk.length) {
    while (root) {
      stk.push(root);
      root = root.left;
    }
    root = stk.pop();
    res.push(root?.val);
    root = root?.right || null;
  }
  return res;
};

// function helper(root: TreeNode | null, result: number[]) {
//   if(!root) {
//       return;
//   }

//   helper(root.left, result);
//   result.push(root.val);
//   helper(root.right, result);
// }

// function inorderTraversal(root: TreeNode | null): number[] {
//   if(!root) {
//       return [];
//   }

//   const result = [];

//   helper(root, result);

//   return result;
// };
