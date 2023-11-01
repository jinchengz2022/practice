const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

function checkRange(grid: unknown[][], x: number, y: number) {
    return x >= 0 && y >= 0 && x < grid.length && y < grid[0].length;
}

function dfs(
    grid: string[][],
    visited: boolean[][],
    point: { x: number; y: number },
) {
    if (grid[point.x][point.y] === '0' || visited[point.x][point.y]) {
        return;
    }

    visited[point.x][point.y] = true;


    for (let k = 0; k < 4; k++) {
        const newX = point.x + dx[k];
        const newY = point.y + dy[k];

        if (
            checkRange(grid, newX, newY) &&
            !visited[newX][newY]
        ) {
            dfs(grid, visited, { x: newX, y: newY });
        }
    }
}

export function numIslands(grid: string[][]): number {
    if (!grid || grid.length === 0 || grid[0].length === 0) {
        return -1;
    }

    const m = grid.length;
    const n = grid[0].length;
    const visited = grid.map((i) => i.map(() => false));

    let result = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1' && !visited[i][j]) {
                dfs(grid, visited, { x: i, y: j });
                result++;
            }
        }
    }

    return result;
};

// function bfs(grid: string[][], point: {x: number; y: number; }) {
//     const queue = [point];
//     grid[point.x][point.y] = '0'

//     while (queue.length !== 0) {
//         const deQueuePoint = queue.shift();

//         for (let k = 0; k < 4; k++) {
//             const newX = dx[k] + deQueuePoint.x;
//             const newY = dy[k] + deQueuePoint.y;

//             if (checkRange(grid, newX, newY) && grid[newX][newY] === '1') {
//                 queue.push({x: newX, y: newY });
//                 grid[newX][newY] = '0';
//             }
//         }
//     }
// }

// function numIslands(grid: string[][]): number {
//     if (!grid || grid.length === 0 || grid[0].length === 0) {
//         return;
//     }

//     let count = 0;

//     for (let c = 0; c < grid.length; c++) {
//         for (let v = 0; v < grid[0].length; v++) {
//             if (grid[c][v] === '1') {
//                 bfs(grid, {x: c, y: v});
//                 count++;
//             }
//         }
//     }

//     return count;
// };