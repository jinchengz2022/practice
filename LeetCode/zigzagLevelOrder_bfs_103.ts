import { TreeNode } from "./TreeNode";

export function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (!root) {
      return [];
  }

  const queue = [root];
  const result = [];

  let isReverse = false;

  while (queue.length !== 0) {
      const size = queue.length;
      const levelList = [];

      for (let k = 0; k < size; k++) {
          const node = queue.shift();
          levelList.push(node.val);

          if (node.left) {
              queue.push(node.left);
          }
          if (node.right) {
              queue.push(node.right);
          }
      }

      if (isReverse) {
          result.push(levelList.reverse());
      } else {
          result.push(levelList);
      }
      isReverse = !isReverse;
  }

  return result;
};