class UniquePaths {
    static uniquePathsDP(m, n) {
      const dp = new Array(n).fill(1);
      for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
          dp[j] += dp[j - 1];
        }
      }
      return dp[n - 1];
    }
  }
module.exports=UniquePaths;  