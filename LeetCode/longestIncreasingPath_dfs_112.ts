const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

function checkRange(board: unknown[][], x: number, y: number) {
    return x >= 0 && y >= 0 && x < board.length && y < board[0].length;
}

function dfs(
    matrix: number[][],
    visited: boolean[][],
    point: { x: number; y: number },
    memo: number[][]
) {
    if (visited[point.x][point.y]) {
        return memo[point.x][point.y];
    }

    // 每个点至少有单位1的长度
    let result = 1;
    visited[point.x][point.y] = true;


    for (let k = 0; k < 4; k++) {
        const newX = point.x + dx[k];
        const newY = point.y + dy[k];

        if (checkRange(matrix, newX, newY) && matrix[newX][newY] > matrix[point.x][point.y]) {
            // dfs结果还需加上本次的长度
            result = Math.max(result, dfs(matrix, visited, { x: newX, y: newY }, memo) + 1)
        }
    }

    // 记录该点的结果
    memo[point.x][point.y] = result;

    return result;
}

export function longestIncreasingPath(matrix: number[][]): number {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return -1;
    }

    const m = matrix.length;
    const n = matrix[0].length;
    const visited = matrix.map((i) => i.map(() => false));
    // 记住每个点的最长路径
    const memo = matrix.map((i) => i.map(() => 0));

    let result = -Infinity;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (!visited[i][j]) {
                result = Math.max(dfs(matrix, visited, { x: i, y: j }, memo), result);
            } else {
                // 若访问过则直接取记忆数组结果
                result = Math.max(memo[i][j], result);
            }
        }
    }

    return result;
};