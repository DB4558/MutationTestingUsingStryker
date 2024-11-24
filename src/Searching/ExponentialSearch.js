class ExponentialSearch {
    static exponentialSearch(arr, target) {
        const n = arr.length;

        // If the target is at the first position
        if (n === 0) return -1;
        if (arr[0] === target) return 0;

        // Find the range where the target might exist
        let bound = 1;
        while (bound < n && arr[bound] <= target) {
            bound *= 2;
        }

        // Perform binary search in the found range
        return this.binarySearch(arr, target, bound / 2, Math.min(bound, n - 1));
    }

    static binarySearch(arr, target, left, right) {
        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);

            // Check if the target is at mid
            if (arr[mid] === target) {
                return mid;
            }

            // Adjust the search range
            if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1; // Target not found
    }
}

module.exports = ExponentialSearch;
