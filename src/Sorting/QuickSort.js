class QuickSort {

    static partition(arr, low, high) {
        const pivot = arr[high];
        let i = low - 1;

        for (let j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }

        
        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

        return i + 1;
    }

    static quickSort(arr, low, high) {
        if (low < high) {
            const pivotIndex = QuickSort.partition(arr, low, high);
            QuickSort.quickSort(arr, low, pivotIndex - 1);
            QuickSort.quickSort(arr, pivotIndex + 1, high);
        }
    }
}

module.exports = QuickSort;  
