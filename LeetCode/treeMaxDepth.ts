import { TreeNode } from "./TreeNode";

// 二叉树最大深度
function maxDepth(root: TreeNode | null): number {
    if(!root) {
        return 0;
    }

    const left = maxDepth(root.left);
    const right = maxDepth(root.left);

    return Math.max(left, right) + 1;
};