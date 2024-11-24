// @ts-nocheck
const BubbleSort=require('../src/Sorting/BubbleSort');
    test("testBubbleSort1", () => {
        let arr = [64, 34, 25, 12, 22, 11, 90];
        let expected = [11, 12, 22, 25, 34, 64, 90];
        BubbleSort.bubbleSort(arr);
        expect(arr).toEqual(expected);
    });

    test("testBubbleSortLargeBlocksOfIdentical", () => {
        let arr = [10, 10, 10, 1, 1, 1, 5, 5, 5];
        let expected = [1, 1, 1, 5, 5, 5, 10, 10, 10];
        BubbleSort.bubbleSort(arr);
        expect(arr).toEqual(expected);
    });

    test("testBubbleSortTwoElements", () => {
        let arr = [5, 3];
        let expected = [3, 5];
        BubbleSort.bubbleSort(arr);
        expect(arr).toEqual(expected);
    });

    test("testBubbleSortAlreadySortedAscendingwithDuplicate", () => {
        let arr = [1, 2, 3, 3, 4];
        let expected = [1, 2, 3, 3, 4];
        BubbleSort.bubbleSort(arr);
        expect(arr).toEqual(expected);
    });

    test("testBubbleSortAlreadySortedAscending", () => {
        let arr = [1, 2, 3, 4, 8];
        let expected = [1, 2, 3, 4, 8];
        BubbleSort.bubbleSort(arr);
        expect(arr).toEqual(expected);
    });

    test("testBubbleSortAlreadySortedDescending", () => {
        let arr = [5, 4, 3, 2, 1];
        let expected = [1, 2, 3, 4, 5];
        BubbleSort.bubbleSort(arr);
        expect(arr).toEqual(expected);
    });

    test("testBubbleSortAlreadySortedDescendingwithDuplicates", () => {
        let arr = [8, 4, 3, 3, 1];
        let expected = [1, 3, 3, 4, 8];
        BubbleSort.bubbleSort(arr);
        expect(arr).toEqual(expected);
    });

    test("testBubbleSortRandomWithDuplicates", () => {
        let arr = [10, 3, 10, 2, 4, 7, 10];
        let expected = [2, 3, 4, 7, 10, 10, 10];
        BubbleSort.bubbleSort(arr);
        expect(arr).toEqual(expected);
    });

    test("testBubbleSort2", () => {
        let arr = [];
        let expected = [];
        BubbleSort.bubbleSort(arr);
        expect(arr).toEqual(expected);
    });

    test("testBubbleSort3", () => {
        let arr = [5];
        let expected = [5];
        BubbleSort.bubbleSort(arr);
        expect(arr).toEqual(expected);
    });

    test("testBubbleSort4", () => {
        let arr = [1, 1, 1, 1, 1];
        let expected = [1, 1, 1, 1, 1];
        BubbleSort.bubbleSort(arr);
        expect(arr).toEqual(expected);
    });

    test("testBubbleSortAllNegative", () => {
        let arr = [-5, -1, -9, -3, -7];
        let expected = [-9, -7, -5, -3, -1];
        BubbleSort.bubbleSort(arr);
        expect(arr).toEqual(expected);
    });

    test("testBubbleSortMixedNumbers", () => {
        let arr = [-1, 5, 3, -2, 8, -4];
        let expected = [-4, -2, -1, 3, 5, 8];
        BubbleSort.bubbleSort(arr);
        expect(arr).toEqual(expected);
    });

    test("testBubbleSortRepeatedValues", () => {
        let arr = [3, 3, 2, 2, 1, 1];
        let expected = [1, 1, 2, 2, 3, 3];
        BubbleSort.bubbleSort(arr);
        expect(arr).toEqual(expected);
    });


    const InsertionSort = require('../src/Sorting/InsertionSort');

   
        test('InsertionSort2 (Empty Array)', () => {
            let arr = [];
            let expected = [];
            InsertionSort.insertionSort(arr);
            expect(arr).toEqual(expected);
        });
    
        test('InsertionSort3 (Single Element)', () => {
            let arr = [5];
            let expected = [5];
            InsertionSort.insertionSort(arr);
            expect(arr).toEqual(expected);
        });
    
        test('InsertionSort4 (Identical Elements)', () => {
            let arr = [1, 1, 1, 1, 1];
            let expected = [1, 1, 1, 1, 1];
            InsertionSort.insertionSort(arr);
            expect(arr).toEqual(expected);
        });
    
        test('InsertionSort5 (Reverse Order)', () => {
            let arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
            let expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            InsertionSort.insertionSort(arr);
            expect(arr).toEqual(expected);
        });
    
        test('InsertionSort Negative and Positive', () => {
            let arr = [-5, 3];
            let expected = [-5, 3];
            InsertionSort.insertionSort(arr);
            expect(arr).toEqual(expected);
        });
    
        test('InsertionSort Already Sorted Ascending', () => {
            let arr = [1, 2, 3, 4, 5];
            let expected = [1, 2, 3, 4, 5];
            InsertionSort.insertionSort(arr);
            expect(arr).toEqual(expected);
        });
    
        test('InsertionSort Already Sorted Descending', () => {
            let arr = [5, 4, 3, 2, 1];
            let expected = [1, 2, 3, 4, 5];
            InsertionSort.insertionSort(arr);
            expect(arr).toEqual(expected);
        });
    
        test('InsertionSort Identical Elements', () => {
            let arr = [7, 7, 7, 7, 7];
            let expected = [7, 7, 7, 7, 7];
            InsertionSort.insertionSort(arr);
            expect(arr).toEqual(expected);
        });
    
        test('InsertionSort Single Element', () => {
            let arr = [42];
            let expected = [42];
            InsertionSort.insertionSort(arr);
            expect(arr).toEqual(expected);
        });
    
    const MergeSort = require('../src/Sorting/MergeSort'); 

      const mergeSort=new MergeSort();
        
            test('MergeSort1', () => {
                const arr = [38, 27, 43, 3, 9, 82, 10];
                mergeSort.mergeSort(arr, 0, arr.length - 1);
                const expected = [3, 9, 10, 27, 38, 43, 82];
                expect(arr).toEqual(expected);
            });
        
            test('MergeSortedArrays', () => {
                const arr = [1, 3, 5, 7, 2, 4, 6, 8];
                mergeSort.merge(arr, 0, 3, 7);
                expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
            });
        
            test('MergeSort2 (Empty Array)', () => {
                const arr = [];
                mergeSort.mergeSort(arr, 0, arr.length - 1);
                const expected = [];
                expect(arr).toEqual(expected);
            });
        
            test('MergeSort3 (Single Element)', () => {
                const arr = [5];
                mergeSort.mergeSort(arr, 0, arr.length - 1);
                const expected = [5];
                expect(arr).toEqual(expected);
            });
        
            test('MergeSort4 (Identical Elements)', () => {
                const arr = [7, 7, 7, 7, 7];
                mergeSort.mergeSort(arr, 0, arr.length - 1);
                const expected = [7, 7, 7, 7, 7];
                expect(arr).toEqual(expected);
            });
        
            test('MergeSort5 (Descending Order)', () => {
                const arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
                mergeSort.mergeSort(arr, 0, arr.length - 1);
                const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
                expect(arr).toEqual(expected);
            });
        
            test('MergeSortWithNegatives', () => {
                const arr = [-3, -1, -7, -2, -5];
                mergeSort.mergeSort(arr, 0, arr.length - 1);
                const expected = [-7, -5, -3, -2, -1];
                expect(arr).toEqual(expected);
            });
        
            test('MergeSortMixedNegativesAndPositives', () => {
                const arr = [-3, 10, -7, 2, 5];
                mergeSort.mergeSort(arr, 0, arr.length - 1);
                const expected = [-7, -3, 2, 5, 10];
                expect(arr).toEqual(expected);
            });
        
            test('MergeSortWithZeros', () => {
                const arr = [0, 0, 0, 1, -1];
                mergeSort.mergeSort(arr, 0, arr.length - 1);
                const expected = [-1, 0, 0, 0, 1];
                expect(arr).toEqual(expected);
            });
        
            test('MergeSortAlreadySorted', () => {
                const arr = [1, 2, 3, 4, 5];
                mergeSort.mergeSort(arr, 0, arr.length - 1);
                const expected = [1, 2, 3, 4, 5];
                expect(arr).toEqual(expected);
            });
        
            test('MergeSortWithDuplicates', () => {
                const arr = [4, 2, 4, 3, 2];
                mergeSort.mergeSort(arr, 0, arr.length - 1);
                const expected = [2, 2, 3, 4, 4];
                expect(arr).toEqual(expected);
            });
        
         
        
            test('MergeSortAlternatingValues', () => {
                const arr = [1, 100, 2, 99, 3];
                mergeSort.mergeSort(arr, 0, arr.length - 1);
                const expected = [1, 2, 3, 99, 100];
                expect(arr).toEqual(expected);
            });
            const QuickSort = require('../src/Sorting/QuickSort');

           
                test('should sort an array in ascending order', () => {
                    const arr = [10, 7, 8, 9, 1, 5];
                    const expected = [1, 5, 7, 8, 9, 10];
                    QuickSort.quickSort(arr, 0, arr.length - 1);
                    expect(arr).toEqual(expected);
                });
            
                test('should handle an empty array', () => {
                    const arr = [];
                    const expected = [];
                    QuickSort.quickSort(arr, 0, arr.length - 1);
                    expect(arr).toEqual(expected);
                });
            
                test('should handle a single element array', () => {
                    const arr = [1];
                    const expected = [1];
                    QuickSort.quickSort(arr, 0, arr.length - 1);
                    expect(arr).toEqual(expected);
                });
            
                test('should handle an array with identical elements', () => {
                    const arr = [7, 7, 7, 7, 7];
                    const expected = [7, 7, 7, 7, 7];
                    QuickSort.quickSort(arr, 0, arr.length - 1);
                    expect(arr).toEqual(expected);
                });
            
                test('should sort an array sorted in reverse order', () => {
                    const arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
                    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
                    QuickSort.quickSort(arr, 0, arr.length - 1);
                    expect(arr).toEqual(expected);
                });
            
                test('should handle an array with negative numbers', () => {
                    const arr = [-3, -1, -7, -2, -5];
                    const expected = [-7, -5, -3, -2, -1];
                    QuickSort.quickSort(arr, 0, arr.length - 1);
                    expect(arr).toEqual(expected);
                });
            
                test('should handle an array with mixed negative and positive numbers', () => {
                    const arr = [-3, 10, -7, 2, 5];
                    const expected = [-7, -3, 2, 5, 10];
                    QuickSort.quickSort(arr, 0, arr.length - 1);
                    expect(arr).toEqual(expected);
                });
            
                test('should handle an array with zeros', () => {
                    const arr = [0, 0, 0, 1, -1];
                    const expected = [-1, 0, 0, 0, 1];
                    QuickSort.quickSort(arr, 0, arr.length - 1);
                    expect(arr).toEqual(expected);
                });
            
                test('should not change an already sorted array', () => {
                    const arr = [1, 2, 3, 4, 5];
                    const expected = [1, 2, 3, 4, 5];
                    QuickSort.quickSort(arr, 0, arr.length - 1);
                    expect(arr).toEqual(expected);
                });
            
                test('should handle an array with repeated values', () => {
                    const arr = [3, 3, 3, 3, 3, 3];
                    const expected = [3, 3, 3, 3, 3, 3];
                    QuickSort.quickSort(arr, 0, arr.length - 1);
                    expect(arr).toEqual(expected);
                });
            
                test('should sort an array with duplicate values correctly', () => {
                    const arr = [4, 2, 4, 3, 2];
                    const expected = [2, 2, 3, 4, 4];
                    QuickSort.quickSort(arr, 0, arr.length - 1);
                    expect(arr).toEqual(expected);
                });
            
                test('should sort an array with alternating high and low values correctly', () => {
                    const arr = [1, 100, 2, 99, 3];
                    const expected = [1, 2, 3, 99, 100];
                    QuickSort.quickSort(arr, 0, arr.length - 1);
                    expect(arr).toEqual(expected);
                });
                const CountingSort = require('../src/Sorting/CountingSort');

             
                    test('should sort an array in ascending order', () => {
                        const arr = [4, 2, 2, 8, 3, 3, 1];
                        const expected = [1, 2, 2, 3, 3, 4, 8];
                        CountingSort.countingSort(arr);
                        expect(arr).toEqual(expected);
                    });
                
                    test('should handle an empty array', () => {
                        const arr = [];
                        const expected = [];
                        CountingSort.countingSort(arr);
                        expect(arr).toEqual(expected);
                    });
                
                    test('should handle a single-element array', () => {
                        const arr = [5];
                        const expected = [5];
                        CountingSort.countingSort(arr);
                        expect(arr).toEqual(expected);
                    });
                
                    test('should handle an array with identical elements', () => {
                        const arr = [1, 1, 1, 1];
                        const expected = [1, 1, 1, 1];
                        CountingSort.countingSort(arr);
                        expect(arr).toEqual(expected);
                    });
                
                    test('should sort an array with unsorted values', () => {
                        const arr = [10, 5, 8, 5, 9, 1, 6];
                        const expected = [1, 5, 5, 6, 8, 9, 10];
                        CountingSort.countingSort(arr);
                        expect(arr).toEqual(expected);
                    });
                
                    test('should handle an array with a large range of values', () => {
                        const arr = [1000, 1, 999, 2, 500, 10];
                        const expected = [1, 2, 10, 500, 999, 1000];
                        CountingSort.countingSort(arr);
                        expect(arr).toEqual(expected);
                    });
                
                    test('should handle an array with duplicate values', () => {
                        const arr = [7, 7, 5, 5, 3, 3, 1];
                        const expected = [1, 3, 3, 5, 5, 7, 7];
                        CountingSort.countingSort(arr);
                        expect(arr).toEqual(expected);
                    });
                
                    test('should sort an array sorted in descending order', () => {
                        const arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
                        const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
                        CountingSort.countingSort(arr);
                        expect(arr).toEqual(expected);
                    });
                
                    test('should handle an array with all zeros', () => {
                        const arr = [0, 0, 0, 0, 0];
                        const expected = [0, 0, 0, 0, 0];
                        CountingSort.countingSort(arr);
                        expect(arr).toEqual(expected);
                    });

                    const HeapSort = require('../src/Sorting/HeapSort');


    test('should sort an array in ascending order', () => {
        const arr = [4, 10, 3, 5, 1];
        const expected = [1, 3, 4, 5, 10];
        HeapSort.heapSort(arr);
        expect(arr).toEqual(expected);
    });

    test('should handle an empty array', () => {
        const arr = [];
        const expected = [];
        HeapSort.heapSort(arr);
        expect(arr).toEqual(expected);
    });

    test('should handle a single-element array', () => {
        const arr = [5];
        const expected = [5];
        HeapSort.heapSort(arr);
        expect(arr).toEqual(expected);
    });

    test('should handle an array with identical elements', () => {
        const arr = [1, 1, 1, 1];
        const expected = [1, 1, 1, 1];
        HeapSort.heapSort(arr);
        expect(arr).toEqual(expected);
    });

    test('should handle an array with unsorted values', () => {
        const arr = [10, 5, 8, 5, 9, 1, 6];
        const expected = [1, 5, 5, 6, 8, 9, 10];
        HeapSort.heapSort(arr);
        expect(arr).toEqual(expected);
    });

    test('should handle an array with negative values', () => {
        const arr = [-5, -10, 5, 0, 7];
        const expected = [-10, -5, 0, 5, 7];
        HeapSort.heapSort(arr);
        expect(arr).toEqual(expected);
    });

    test('should handle an array sorted in descending order', () => {
        const arr = [10, 9, 8, 7, 6];
        const expected = [6, 7, 8, 9, 10];
        HeapSort.heapSort(arr);
        expect(arr).toEqual(expected);
    });


            
                 
            
            
        