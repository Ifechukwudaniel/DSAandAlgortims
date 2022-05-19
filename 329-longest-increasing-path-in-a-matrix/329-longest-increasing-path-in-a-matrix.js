/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    const m = matrix.length;
    const n = matrix[m - 1].length;
    const max =  new Array(m);
    for(let i = 0; i < m; i += 1) {
        max[i] = new Array(n).fill(0);
    }

    let result = 1;
    const dfs = (i, j, prev) => {
        if(i < 0 || j < 0) return 0;
        if(i >= m || j >= n) return 0;

        const val = matrix[i][j];
        if(val <= prev) return 0;
        if(max[i][j] !== 0) return max[i][j];

        const down = dfs(i + 1, j, val);
        const right = dfs(i, j + 1, val);
        const up = dfs(i - 1, j, val);
        const left = dfs(i, j - 1, val);

        max[i][j] = Math.max.apply(null, [down, right, up, left]) + 1;
        if(result < max[i][j]) {
            result = max[i][j];
        }
        return max[i][j];
    }

    for(let i = 0; i < m; i += 1) {
        for(let j = 0; j < n; j += 1) {
            if(max[i][j] !== 0) continue;
            dfs(i, j, -1);
        }
    }

    return result;
};