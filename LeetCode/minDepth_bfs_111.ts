import { TreeNode } from "./TreeNode";

export function minDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  const queue = [root];
  let result = 0;

  while (queue.length !== 0) {
    const size = queue.length;
    result++;

    for (let k = 0; k < size; k++) {
      const node = queue.shift();

      if (!node.left && !node.right) {
        return result;
      }
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  return result;
}

function minDepth1(root: TreeNode | null): number {
    if (!root) {
      return 0;
    }
  
    const leftNum = minDepth1(root.left);
    const rightNum = minDepth1(root.right);

    if(leftNum === 0) {
        return minDepth1(root.left) + 1;
    } else if(rightNum === 0) {
        return minDepth1(root.right) + 1;
    } else {
        return Math.min(leftNum, rightNum) + 1;
    }
  }
  