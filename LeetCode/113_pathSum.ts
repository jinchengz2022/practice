import { TreeNode } from "./TreeNode";

function helper(root, num, flagArray, result) {
    if(!root.left && !root.right && num === 0) {
        const ary = [...flagArray];
        result.push(ary);
        return result;
    }

    if(root.left) {
        flagArray.push(root.left.val)
        helper(root.left, num - root.left.val, flagArray, result)
        flagArray.pop()
    }

    if(root.right) {
        flagArray.push(root.right.val)
        helper(root.right, num - root.right.val, flagArray, result)
        flagArray.pop()
    }
}

// 找出树中总和等于目标数的路径
function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  if (!root) {
    return [];
  }

  const result: number[][] = [];
  let flagArray = [(root?.val || 0)];

  helper(root, targetSum - (root?.val || 0), flagArray, targetSum);

  return result;
}
