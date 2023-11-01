import { TreeNode } from "./TreeNode";

const levelOrder = (root: TreeNode | null): number[][] => {
  if (!root) {
    return [];
  }

  const queue = [root];
  const result = [];

  while (queue.length) {
    const size = queue.length;
    const curRes = [];

    for (let k = 0; k < size; k++) {
      const deQueueNode = queue.shift();
      curRes.push(deQueueNode.val);
      if (deQueueNode.left) {
        queue.push(deQueueNode.left);
      }
      if (deQueueNode.right) {
        queue.push(deQueueNode.right);
      }
    }
    result.push(curRes);
  }

  return result;
};
