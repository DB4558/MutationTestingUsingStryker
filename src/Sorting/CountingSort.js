class CountingSort {
    static countingSort(arr) {
        if (arr.length === 0) return arr;

        const max = Math.max(...arr);
        const min = Math.min(...arr);
        const range = max - min + 1;

        // Create and initialize the counting array
        const count = Array(range).fill(0);

        // Store the count of each number
        for (let i = 0; i < arr.length; i++) {
            count[arr[i] - min]++;
        }

        // Reconstruct the sorted array
        let index = 0;
        for (let i = 0; i < range; i++) {
            while (count[i] > 0) {
                arr[index++] = i + min;
                count[i]--;
            }
        }

        return arr;
    }
}

module.exports = CountingSort;
