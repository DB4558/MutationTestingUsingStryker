class ShortestCommonSupersequence {
    static shortestCommonSupersequence(str1, str2) {
        const n = str1.length;
        const m = str2.length;
        return this.solve(n, m, str1, str2);
    }

    static solve(n, m, s1, s2) {
        const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));

        // Build the DP table
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= m; j++) {
                if (s1[i - 1] === s2[j - 1]) {
                    dp[i][j] = 1 + dp[i - 1][j - 1];
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }

        // Trace back the shortest common supersequence
        let i = n, j = m;
        const result = [];

        while (i > 0 && j > 0) {
            if (s1[i - 1] === s2[j - 1]) {
                result.push(s1[i - 1]);
                i--;
                j--;
            } else if (dp[i - 1][j] > dp[i][j - 1]) {
                result.push(s1[i - 1]);
                i--;
            } else {
                result.push(s2[j - 1]);
                j--;
            }
        }

        // Append remaining characters of s1 and s2
        while (i > 0) {
            result.push(s1[i - 1]);
            i--;
        }
        while (j > 0) {
            result.push(s2[j - 1]);
            j--;
        }

        return result.reverse().join('');
    }
}

module.exports = ShortestCommonSupersequence;
