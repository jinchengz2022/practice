// 前序遍历 根左右
// 中序遍历 左根右
// 后序遍历 左右根
export class TreeNode {
  val: number | null | undefined;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}