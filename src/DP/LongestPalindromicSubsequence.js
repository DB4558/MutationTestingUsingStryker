class LongestPalindromicSubsequence {
    static LPS(original) {
        if (!original) {
            throw new Error("Input string cannot be null or undefined");
        }

        let reverse = original.split("").reverse().join("");
        return this.recursiveLPS(original, reverse);
    }

    static recursiveLPS(original, reverse) {
        if (original.length === 0 || reverse.length === 0) {
            return "";
        }

        if (original[original.length - 1] === reverse[reverse.length - 1]) {
            const bestSubResult = this.recursiveLPS(
                original.slice(0, -1),
                reverse.slice(0, -1)
            );
            return reverse[reverse.length - 1] + bestSubResult;
        } else {
            const bestSubResult1 = this.recursiveLPS(
                original,
                reverse.slice(0, -1)
            );
            const bestSubResult2 = this.recursiveLPS(
                original.slice(0, -1),
                reverse
            );

            return bestSubResult1.length > bestSubResult2.length
                ? bestSubResult1
                : bestSubResult2;
        }
    }
}

module.exports = LongestPalindromicSubsequence;
