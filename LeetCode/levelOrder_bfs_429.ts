export class Node {
  val: number;
  children: Node[];
  constructor(val?: number) {
    this.val = val === undefined ? 0 : val;
    this.children = [];
  }
}

export function levelOrder(root: Node | null): number[][] {
  if (!root) {
    return [];
  }

  const queue = [root];
  const result = [];

  while (queue.length !== 0) {
    const size = queue.length;
    const levelList = [];

    for (let k = 0; k < size; k++) {
      const node = queue.shift();
      levelList.push(node.val);

      for (let j = 0; j < node.children.length; j++) {
        queue.push(node.children[j]);
      }
    }

    result.push(levelList);
  }

  return result;
}
