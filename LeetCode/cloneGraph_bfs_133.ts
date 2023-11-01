export class Node {
  val: number;
  neighbors: Node[];
  constructor(val?: number, neighbors?: Node[]) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

function dfs(map: Map<Node, Node>, node: Node) {
  if (map.has(node)) {
    return map.get(node);
  }

  const newNode = new Node(node.val);

  map.set(node, newNode);

  for (let k of node.neighbors) {
    const neighbor = dfs(map, k);
    newNode.neighbors.push(neighbor);
  }

  return newNode;
}

function cloneGraph(node: Node | null): Node | null {
  if (!node) {
    return null;
  }

  const map = new Map();

  return dfs(map, node);
}
