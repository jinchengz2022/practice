import { TreeNode } from "./TreeNode";

// 层序遍历
function levelOrder(root: TreeNode | null): number[][] {
    if (!root) {
        return [];
    }

    const stack: any = [];
    const result: number[][] = [];

    // 先添加根节点
    stack.push(root);

    while (stack.length !== 0) {
        const len = stack.length;
        // 记录层级值
        const levelList: any = [];

        for (let i = 0; i < len; i++) {
            // 出队
            const node = stack.shift();
            // 添加节点值
            levelList.push(node?.val);
            if (node.left) {
                stack.push(node.left);
            }

            if (node.right) {
                stack.push(node.right);
            }
        }

        // 最后把该层值加到结果集中
        result.push(levelList);
    }

    return result;
};