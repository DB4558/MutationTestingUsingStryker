class JumpSearch {
    static jumpSearch(arr, target) {
        const n = arr.length;

        // Determine the optimal jump size
        let step = Math.floor(Math.sqrt(n));

        // Find the block where the element might be present
        let prev = 0;
        while (prev < n && arr[Math.min(step, n) - 1] < target) {
            prev = step;
            step += Math.floor(Math.sqrt(n));

            // If we go beyond the array size
            if (prev >= n) {
                return -1;
            }
        }

        // Perform linear search in the identified block
        return this.linearSearch(arr, target, prev, Math.min(step, n));
    }

    static linearSearch(arr, target, start, end) {
        for (let i = start; i < end; i++) {
            if (arr[i] === target) {
                return i;
            }
        }
        return -1;
    }
}

module.exports = JumpSearch;
