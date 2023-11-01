/**
 * 
 * @param n 定点
 * @param edeges 边
 */
export function photoIsTree(n: number, edeges: number[][]): boolean {
  if(!edeges || edeges.length === 0 || edeges[0].length === 0) {
    return false;
  }

  // 树：顶点 = 边数 + 1
  if(n + 1 !== edeges.length) {
    return false;
  }

  const map = new Map();

  // 构造邻接表
  for(let i = 0; i < n; i++) {
    map.set(i, []);
  }
  for(let i = 0; i < edeges.length; i++) {
    const u = edeges[i][0];
    const v = edeges[i][1];

    map.set(u, [...map.get(u), v]);
    map.set(v, [...map.get(v), u]);
  }

  let count = 0;
  const visited = new Array(n).fill(false);

  for(let k = 0; k < n; k++) {
    if(!visited[k]) {
      bfs(map, visited, k);
      count++;
    }
  }

  return count === 1;
}

function bfs(map: Map<number, number[]>, visited: boolean[], pos: number) {
  const queue = [pos];

  visited[pos] = true;

  while(queue.length !== 0) {
    const i = queue.shift();

    for(let k of map.get(i)) {
      if(!visited[k]) {
        visited[k] = true;
        queue.push(k);
      }
    }
  }
}