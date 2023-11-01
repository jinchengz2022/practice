/**
 Do not return anything, modify board in-place instead.
 */
 const dx = [1, 0, -1, 0];
 const dy = [0, 1, 0, -1];
 
 function checkRange(board: unknown[][], x: number, y: number) {
     return x >= 0 && y >= 0 && x < board.length && y < board[0].length;
 }
 
 function checkBoundry(x1: number, y1: number, x2: number, y2: number) {
     return x1 === 0 || x1 === x2 || y1 === 0 || y1 === y2;
 }
 
 function dfs(
     board: string[][],
     visited: boolean[][],
     point: { x: number; y: number },
 ): number {
     if (board[point.x][point.y] === 'X') {
         return;
     }
     // 任何不在边界上，或不与边界上的 'O' 相连的 'O' 最终都会被填充为 'X'
 
     visited[point.x][point.y] = true;
     board[point.x][point.y] = 'A'
 
     for (let k = 0; k < 4; k++) {
         const newX = point.x + dx[k];
         const newY = point.y + dy[k];
 
         if (
             checkRange(board, newX, newY) &&
             !visited[newX][newY]
         ) {
             dfs(board, visited, { x: newX, y: newY })
         }
     }
 
 }
 
 export function solve(board: string[][]): void {
     if (!board || board.length === 0 || board[0].length === 0) {
         return;
     }
 
     const m = board.length;
     const n = board[0].length;
     const visited = board.map((i) => i.map(() => false));
 
     for (let i = 0; i < m; i++) {
         for (let j = 0; j < n; j++) {
             // 被围绕的区间不会存在于边界上
             if (checkBoundry(i, j, m - 1, n - 1) && board[i][j] === 'O' && !visited[i][j]) {
                 dfs(board, visited, { x: i, y: j })
             }
         }
     }
 
     for (let i = 0; i < m; i++) {
         for (let j = 0; j < n; j++) {
             if (board[i][j] === 'O') {
                 // 非边界O填充为X
                 board[i][j] = 'X'
             } else if (board[i][j] === 'A') {
                 // 将边界上的A填充为O
                 board[i][j] = 'O'
             } else {
                 continue;
             }
         }
     }
 };
 