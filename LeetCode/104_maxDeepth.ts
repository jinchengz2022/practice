import { TreeNode } from "./TreeNode";

// 树的最大深度
function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  const leftDeepth = maxDepth(root.left);
  const rightDeepth = maxDepth(root.right);

  return Math.max(leftDeepth, rightDeepth) + 1;
}

function maxDepth2(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  const stack = [root];
  let result = 0;

  while (stack.length) {
    result++;

    for (let i = 0; i < stack.length; i++) {
    const popNode = stack.shift();
    // 最小深度值
      // if(!popNode?.left && !popNode?.right) {
      //     return result
      // }

      if (popNode?.left) {
        stack.push(popNode.left);
      }
      if (popNode?.right) {
        stack.push(popNode.right);
      }
    }
  }

  return result;
}
