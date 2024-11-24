class Knapsack {
    knapSack(W, wt, val, n) {
        if (!wt || !val) {
            throw new Error("Invalid input: weights or values cannot be null.");
        }

        const dp = Array.from({ length: n + 1 }, () => Array(W + 1).fill(0));

        for (let i = 0; i <= n; i++) {
            for (let w = 0; w <= W; w++) {
                if (i === 0 || w === 0) {
                    dp[i][w] = 0;
                } else if (wt[i - 1] <= w) {
                    dp[i][w] = Math.max(
                        val[i - 1] + dp[i - 1][w - wt[i - 1]],
                        dp[i - 1][w]
                    );
                } else {
                    dp[i][w] = dp[i - 1][w];
                }
            }
        }

        return dp[n][W];
    }
}
module.exports=Knapsack;