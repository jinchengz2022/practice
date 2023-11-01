const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

export function checkRange(board: unknown[][], x: number, y: number) {
  return x >= 0 && y >= 0 && x < board.length && y < board[0].length;
}

function dfs(
  board: string[][],
  word: string,
  visited: boolean[][],
  point: { x: number; y: number },
  index: number
) {
  if (word[index] !== board[point.x][point.y]) {
    return false;
  }

  visited[point.x][point.y] = true;

  if (word.length - 1 === index) {
    return true;
  }

  let hasPath = false;

  for (let k = 0; k < 4; k++) {
    const newX = point.x + dx[k];
    const newY = point.y + dy[k];

    if (checkRange(board, newX, newY) && !visited[newX][newY]) {
      // 找到匹配字母将继续走dfs
      hasPath =
        hasPath || dfs(board, word, visited, { x: newX, y: newY }, index + 1);

        if(hasPath) {
          break;
        }
    }
  }

  visited[point.x][point.y] = false;

  return hasPath;
}

function exist(board: string[][], word: string): boolean {
  if (!board || board.length === 0 || board[0].length === 0) {
    return false;
  }

  const m = board.length;
  const n = board[0].length;
  // const visited = new Array(m).fill(new Array(n).fill(false));
  const visited1 = board.map((i) => i.map(() => false));


  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 从第一个字母开始搜索
      if (board[i][j] === word[0] && !visited1[i][j]) {
        const flag = dfs(board, word, visited1, { x: i, y: j }, 0);
        if (flag) {
          return true;
        }
      }
    }
  }

  return false;
}

console.log(exist(
  [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
  ],
  "ABCCED"
));

