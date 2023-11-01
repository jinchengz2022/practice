const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

function checkRange(grid: unknown[][], x: number, y: number) {
    return x >= 0 && y >= 0 && x < grid.length && y < grid[0].length;
}

function dfs(
    grid: number[][],
    visited: boolean[][],
    point: { x: number; y: number },
): number {
    if (grid[point.x][point.y] === 0 || visited[point.x][point.y]) {
        return 0;
    }

    visited[point.x][point.y] = true;

    let total = 1;

    for (let k = 0; k < 4; k++) {
        const newX = point.x + dx[k];
        const newY = point.y + dy[k];

        if (
            checkRange(grid, newX, newY) &&
            !visited[newX][newY]
        ) {
            total += dfs(grid, visited, { x: newX, y: newY });
        }
    }

    return total;
}

export function maxAreaOfIsland(grid: number[][]): number {
    if (!grid || grid.length === 0 || grid[0].length === 0) {
        return -1;
    }

    const m = grid.length;
    const n = grid[0].length;
    const visited = grid.map((i) => i.map(() => false));

    let result = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1 && !visited[i][j]) {
                result = Math.max(dfs(grid, visited, { x: i, y: j }), result);
            }
        }
    }

    return result;
};
