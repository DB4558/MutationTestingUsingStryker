class EditDistance {
    minDistance(word1, word2) {
        const len1 = word1.length;
        const len2 = word2.length;

        const dp = Array.from({ length: len1 + 1 }, () => Array(len2 + 1).fill(0));

        // Initialize base cases
        for (let i = 0; i <= len1; i++) {
            dp[i][0] = i; // Deleting all characters of word1
        }

        for (let j = 0; j <= len2; j++) {
            dp[0][j] = j; // Inserting all characters of word2
        }

        // Fill the dp table
        for (let i = 0; i < len1; i++) {
            const c1 = word1.charAt(i);
            for (let j = 0; j < len2; j++) {
                const c2 = word2.charAt(j);
                if (c1 === c2) {
                    dp[i + 1][j + 1] = dp[i][j]; // Characters match
                } else {
                    // Calculate the minimum of insert, delete, and replace
                    const replace = dp[i][j] + 1;
                    const insert = dp[i][j + 1] + 1;
                    const deletescript = dp[i + 1][j] + 1;

                    dp[i + 1][j + 1] = Math.min(replace, Math.min(insert, deletescript));
                }
            }
        }

        return dp[len1][len2];
    }
}
module.exports=EditDistance;