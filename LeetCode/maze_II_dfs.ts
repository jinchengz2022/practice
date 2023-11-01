const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

export function chechRange(board: unknown[][], x: number, y: number) {
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
    if (chechRange(board, newX, newY) && !visited[newX][newY]) {
      console.log(board[newX][newY], index);
      hasPath =
        hasPath || dfs(board, word, visited, { x: newX, y: newY }, index + 1);
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
  const visited = new Array(m).fill(new Array(n).fill(false));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 从第一个字母开始搜索
      if (board[i][j] === word[0] && !visited[i][j]) {
        if (dfs(board, word, visited, { x: i, y: j }, 0)) {
          return true;
        }
      }
    }
  }

  return false;
}
