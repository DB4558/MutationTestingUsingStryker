class StockBuyAndSell {
    static getMaximumProfit(prices, n) {
        const dp = Array.from({ length: n + 1 }, () => Array(2).fill(0));

        // Base case: no profit possible if we're past the last day
        dp[n][0] = dp[n][1] = 0;

        for (let ind = n - 1; ind >= 0; ind--) {
            for (let buy = 0; buy <= 1; buy++) {
                if (buy === 0) {
                    dp[ind][buy] = Math.max(0 + dp[ind + 1][0], -prices[ind] + dp[ind + 1][1]);
                } else {
                    dp[ind][buy] = Math.max(0 + dp[ind + 1][1], prices[ind] + dp[ind + 1][0]);
                }
            }
        }

        return dp[0][0];
    }
}
module.exports=StockBuyAndSell;