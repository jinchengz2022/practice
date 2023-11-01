function bfs(isConnected: number[][], visited: boolean[], ids: number) {
  const queue = [];

  visited[ids] = true;
  queue.push(ids);

  while (queue.length !== 0) {
      const ids1 = queue.shift();
      const values = isConnected[ids];

      for (let v = 0; v < values.length; v++) {
          if (isConnected[ids1][v] === 1 && !visited[v]) {
              visited[v] = true;
              queue.push(v);
          }
      }
  }
}

export function findCircleNum(isConnected: number[][]): number {
  if (!isConnected || isConnected[0].length === 0 || isConnected.length === 0) {
      return 0;
  }

  let count = 0;
  const visited = new Array(isConnected.length).fill(false);

  for (let k = 0; k < isConnected.length; k++) {
      if (!visited[k]) {
          bfs(isConnected, visited, k);
          count++;
      }
  }

  return count;
};