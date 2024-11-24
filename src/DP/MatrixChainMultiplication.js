class MatrixChainMultiplication {
    static solve(arr, i, j, dp) {
        if (i === j) return 0;

        if (dp[i][j] !== -1) return dp[i][j];

        let mini = Number.MAX_VALUE;

        for (let k = i; k <= j - 1; k++) {
            const ans =
                this.solve(arr, i, k, dp) +
                this.solve(arr, k + 1, j, dp) +
                arr[i - 1] * arr[k] * arr[j];

            mini = Math.min(mini, ans);
        }

        dp[i][j] = mini;
        return dp[i][j];
    }

    static matrixMultiplication(arr, N) {
        const dp = Array.from({ length: N }, () => Array(N).fill(-1));
        const i = 1;
        const j = N - 1;
        return this.solve(arr, i, j, dp);
    }
}

module.exports = MatrixChainMultiplication;
