type Point = {
  x: number;
  y: number;
};

export function chechRange(maze: number[][], x: number, y: number) {
  return x >= 0 && y >= 0 && x < maze.length && y < maze[0].length;
}

function dfs(
  result: Point[][],
  path: Point[],
  maze: number[][],
  visited: boolean[][],
  start: Point,
  end: Point
) {
  // 已访问过或者遇到黑块
  if (visited[start.x][start.y] || maze[start.x][start.y] === 1) {
    return;
  }

  // 标记
  visited[start.x][start.y] = true;

  // 到达目的地
  if (start.x === end.x && start.y === end.y) {
    // 回溯
    visited[start.x][start.y] = false;

    const r = [...path];
    result.push(r);

    return;
  }

  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  for (let k = 0; k < 4; k++) {
    const point = { x: dx[k] + start.x, y: dy[k] + start.y };

    // 判断是否在范围内并且没被访问过
    if (chechRange(maze, point.x, point.y) && !visited[point.x][point.y]) {
      path.push(point);

      dfs(result, path, maze, visited, point, end);

      path.pop();
    }
  }

  // 回溯
  visited[start.x][start.y] = false;
}

function findAllPath(maze: number[][], start: Point, end: Point): number[][] {
  if (!maze || maze.length === 0 || maze[0].length === 0) {
    return [];
  }

  const visited = maze.map((i) => i.map(() => false));
  const path = [];
  const result = [];

  dfs(result, path, maze, visited, start, end);

  console.log(result);

  return result;
}

findAllPath(
  [
    [0, 0, 0, 0, 0, 1],
    [0, 1, 0, 1, 0, 1],
    [0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 1],
  ],
  { x: 0, y: 0 },
  { x: 4, y: 4 }
);
