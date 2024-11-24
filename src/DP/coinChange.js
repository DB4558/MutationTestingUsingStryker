class CoinChange {
    // Function to count the number of combinations
    static coinchange(coins, amount) {
        const combinations = new Array(amount + 1).fill(0);
        combinations[0] = 1;

        for (let coin of coins) {
            for (let i = coin; i <= amount; i++) {
                combinations[i] += combinations[i - coin];
            }
        }

        return combinations[amount];
    }

    // Function to find the minimum number of coins
    static minimumCoins(coins, amount) {
        const minimumCoins = new Array(amount + 1).fill(Infinity);
        minimumCoins[0] = 0;

        for (let i = 1; i <= amount; i++) {
            for (let coin of coins) {
                if (coin <= i) {
                    const sub_res = minimumCoins[i - coin];
                    if (sub_res !== Infinity && sub_res + 1 < minimumCoins[i]) {
                        minimumCoins[i] = sub_res + 1;
                    }
                }
            }
        }

        return minimumCoins[amount] === Infinity ? -1 : minimumCoins[amount];
    }
}
module.exports=CoinChange;
