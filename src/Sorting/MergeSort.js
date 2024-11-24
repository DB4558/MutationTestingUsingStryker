class MergeSort {
    // Merge function that merges two sorted halves
    merge(arr, left, mid, right) {
        const n1 = mid - left + 1;
        const n2 = right - mid;

        // Create temporary arrays
        const leftArray = new Array(n1);
        const rightArray = new Array(n2);

        // Copy data to temporary arrays leftArray[] and rightArray[]
        for (let i = 0; i < n1; i++) {
            leftArray[i] = arr[left + i];
        }
        for (let j = 0; j < n2; j++) {
            rightArray[j] = arr[mid + 1 + j];
        }

        let i = 0; // Initial index for leftArray
        let j = 0; // Initial index for rightArray
        let k = left; // Initial index for the merged array

        // Merge the temp arrays back into arr[left..right]
        while (i < n1 && j < n2) {
            if (leftArray[i] <= rightArray[j]) {
                arr[k++] = leftArray[i++];
            } else {
                arr[k++] = rightArray[j++];
            }
        }

        // Copy the remaining elements of leftArray[], if any
        while (i < n1) {
            arr[k++] = leftArray[i++];
        }

        // Copy the remaining elements of rightArray[], if any
        while (j < n2) {
            arr[k++] = rightArray[j++];
        }
    }

    // Merge Sort function that recursively splits the array
    mergeSort(arr, left, right) {
        if (left < right) {
            const mid = Math.floor((left + right) / 2);

            // Recursively divide the array into two halves
            this.mergeSort(arr, left, mid);
            this.mergeSort(arr, mid + 1, right);

            // Merge the sorted halves
            this.merge(arr, left, mid, right);
        }
    }
}
module.exports=MergeSort;