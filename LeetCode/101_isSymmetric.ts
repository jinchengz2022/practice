import { TreeNode } from "./TreeNode";


// 对称二叉树
function helper(rootLeft: TreeNode | null, rootRight: TreeNode | null) {
  if (!rootLeft && !rootRight) {
    return true;
  } else if (!rootLeft && rootRight) {
    return false;
  } else if (rootLeft && !rootRight) {
    return false;
  } else {
    return rootLeft?.val === rootRight?.val
      ? helper(rootLeft?.left || null, rootRight?.right || null) &&
          helper(rootRight?.left || null, rootLeft?.right || null)
      : false;
  }
}

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) {
    return false;
  }

  return helper(root.left, root.right);
}
