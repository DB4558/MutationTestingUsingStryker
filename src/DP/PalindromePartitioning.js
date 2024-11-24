class PalindromePartitioning {
    static minimalPartitions(word) {
        const len = word.length;

        const minCuts = new Array(len).fill(0);
        const isPalindrome = Array.from({ length: len }, () => new Array(len).fill(false));

        // Single character substrings are palindromes
        for (let i = 0; i < len; i++) {
            isPalindrome[i][i] = true;
        }

        // Build the solution in a bottom-up manner
        for (let L = 2; L <= len; L++) {
            for (let i = 0; i < len - L + 1; i++) {
                const j = i + L - 1;

                if (L === 2) {
                    isPalindrome[i][j] = (word[i] === word[j]);
                } else {
                    isPalindrome[i][j] = (word[i] === word[j]) && isPalindrome[i + 1][j - 1];
                }
            }
        }

        for (let i = 0; i < len; i++) {
            if (isPalindrome[0][i]) {
                minCuts[i] = 0;
            } else {
                minCuts[i] = Infinity;
                for (let j = 0; j < i; j++) {
                    if (isPalindrome[j + 1][i] && 1 + minCuts[j] < minCuts[i]) {
                        minCuts[i] = 1 + minCuts[j];
                    }
                }
            }
        }

        return minCuts[len - 1];
    }
}

module.exports = PalindromePartitioning;
