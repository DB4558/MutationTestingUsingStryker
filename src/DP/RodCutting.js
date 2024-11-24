class RodCutting {
    static cutRod(price, n) {
        const val = new Array(n + 1).fill(0);

        for (let i = 1; i <= n; i++) {
            let max_val = Number.MIN_SAFE_INTEGER;
            for (let j = 0; j < i; j++) {
                max_val = Math.max(max_val, price[j] + val[i - j - 1]);
            }
            val[i] = max_val;
        }

        return val[n];
    }
}

module.exports = RodCutting;
