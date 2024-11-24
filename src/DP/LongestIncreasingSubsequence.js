class LongestIncreasingSubsequence {
    static upperBound(arr, l, r, key) {
        while (l < r - 1) {
            const m = Math.floor((l + r) / 2);
            if (arr[m] >= key) {
                r = m;
            } else {
                l = m;
            }
        }
        return r;
    }

    static LIS(array) {
        const N = array.length;
        if (N === 0) {
            return 0;
        }

        const tail = new Array(N);
        let length = 1;

        tail[0] = array[0];
        for (let i = 1; i < N; i++) {
            if (array[i] < tail[0]) {
                tail[0] = array[i];
            } else if (array[i] > tail[length - 1]) {
                tail[length++] = array[i];
            } else {
                tail[LongestIncreasingSubsequence.upperBound(tail, -1, length - 1, array[i])] = array[i];
            }
        }

        return length;
    }

    static findLISLen(a) {
        const size = a.length;
        const arr = new Array(size);
        arr[0] = a[0];
        let lis = 1;

        for (let i = 1; i < size; i++) {
            const index = LongestIncreasingSubsequence.binarySearchBetween(arr, lis, a[i]);
            arr[index] = a[i];
            if (index > lis) {
                lis++;
            }
        }

        return lis;
    }

    static binarySearchBetween(t, end, key) {
        let left = 0;
        let right = end;
        if (key < t[0]) {
            return 0;
        }
        if (key > t[end]) {
            return end + 1;
        }
        while (left < right - 1) {
            const middle = Math.floor((left + right) / 2);
            if (t[middle] < key) {
                left = middle;
            } else {
                right = middle;
            }
        }
        return right;
    }
}

module.exports = LongestIncreasingSubsequence;
