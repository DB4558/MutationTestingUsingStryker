const BinarySearch = require('../src/Searching/BinarySearch'); 

  test('Test 1: Target is in the middle of the array', () => {
    const array = [1, 2, 3, 4, 5];
    const target = 3;
    const result = BinarySearch.binarySearch(array, target);
    expect(result).toBe(2); // Target should be at index 2
  });

  test('Test 2: Target is the first element', () => {
    const array = [10, 20, 30, 40, 50];
    const target = 10;
    const result = BinarySearch.binarySearch(array, target);
    expect(result).toBe(0); // Target should be at index 0
  });

  test('Test 3: Target is the last element', () => {
    const array = [10, 20, 30, 40, 50];
    const target = 50;
    const result = BinarySearch.binarySearch(array, target);
    expect(result).toBe(4); // Target should be at index 4
  });

  test('Test 4: Target is not in the array', () => {
    const array = [5, 15, 25, 35, 45];
    const target = 20;
    const result = BinarySearch.binarySearch(array, target);
    expect(result).toBe(-1); // Target is not in the array, should return -1
  });

  test('Test 5: Array is empty', () => {
    const array = [];
    const target = 10;
    const result = BinarySearch.binarySearch(array, target);
    expect(result).toBe(-1); // Empty array should always return -1
  });

  test('Test 6: Number repeated', () => {
    const array = [2, 2, 2, 2, 2, 2, 2];
    const target = 2;
    const result = BinarySearch.binarySearch(array, target);
    expect(result).toBe(3); // For the first occurrence, index 3 is returned
  });

  const LinearSearch = require('../src/Searching/LinearSearch');

  test('Test Case 1: Target is in the middle of the array', () => {
      const array = [1, 2, 3, 4, 5];
      const target = 3;
      const result = LinearSearch.linearSearch(array, target);
      expect(result).toBe(2);
  });
  
  test('Test Case 2: Target is at the beginning of the array', () => {
      const array = [10, 20, 30, 40];
      const target = 10;
      const result = LinearSearch.linearSearch(array, target);
      expect(result).toBe(0);
  });
  
  test('Test Case 3: Target is at the end of the array', () => {
      const array = [5, 10, 15, 20];
      const target = 20;
      const result = LinearSearch.linearSearch(array, target);
      expect(result).toBe(3);
  });
  
  test('Test Case 4: Target is not in the array', () => {
      const array = [7, 14, 21, 28];
      const target = 35;
      const result = LinearSearch.linearSearch(array, target);
      expect(result).toBe(-1);
  });
  
  test('Test Case 5: Empty array', () => {
      const array = [];
      const target = 1;
      const result = LinearSearch.linearSearch(array, target);
      expect(result).toBe(-1);
  });
  const JumpSearch = require('../src/Searching/JumpSearch');


  test('Target is at the beginning', () => {
    const array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    const target = 1;
    const result = JumpSearch.jumpSearch(array, target);
    expect(result).toBe(0);
  });

  test('Target is at the end', () => {
    const array = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
    const target = 20;
    const result = JumpSearch.jumpSearch(array, target);
    expect(result).toBe(9);
  });

  test('Target is in the middle', () => {
    const array = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28];
    const target = 13;
    const result = JumpSearch.jumpSearch(array, target);
    expect(result).toBe(4);
  });


  test('Target is not in the array', () => {
    const array = [3, 6, 9, 12, 15, 18];
    const target = 10;
    const result = JumpSearch.jumpSearch(array, target);
    expect(result).toBe(-1);
  });

  test('Empty array', () => {
    const array = [];
    const target = 10;
    const result = JumpSearch.jumpSearch(array, target);
    expect(result).toBe(-1);
  });

  test('Array with repeated elements', () => {
    const array = [10, 10, 10];
    const target = 10;
    const result = JumpSearch.jumpSearch(array, target);
    expect(result).toBe(0);
  });

  test('Target at exact block boundary', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const target = 4;
    const result = JumpSearch.jumpSearch(array, target);
    expect(result).toBe(3);
  });

  test('Target within block', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const target = 7;
    const result = JumpSearch.jumpSearch(array, target);
    expect(result).toBe(6);
  });

  test('Target smaller than the first element', () => {
    const array = [5, 10, 15];
    const target = 1;
    const result = JumpSearch.jumpSearch(array, target);
    expect(result).toBe(-1);
  });

  test('Empty array should return -1', () => {
    const array = [];
    const target = 5;
    const result = JumpSearch.jumpSearch(array, target);
    expect(result).toBe(-1);
  });

  test('All identical elements', () => {
    const array = [7, 7, 7, 7, 7];
    const target = 7;
    const result = JumpSearch.jumpSearch(array, target);
    expect(result).toBe(0);
  });

  test('Repeated values but no match', () => {
    const array = [4, 4, 4, 4];
    const target = 5;
    const result = JumpSearch.jumpSearch(array, target);
    expect(result).toBe(-1);
  });

  const ExponentialSearch = require('../src/Searching/ExponentialSearch');


    test('ExponentialSearchTargetInRightSubarray', () => {
        const array = [1, 3, 5, 7, 9, 11, 13, 15];
        const target = 13;
        const result = ExponentialSearch.exponentialSearch(array, target);
        expect(result).toBe(6);
    });

    test('ExponentialSearchTargetInLeftSubarray', () => {
        const array = [10, 20, 30, 40, 50];
        const target = 20;
        const result = ExponentialSearch.exponentialSearch(array, target);
        expect(result).toBe(1);
    });

   

    test('ExponentialSearchTargetLargerThanAll', () => {
        const array = [2, 4, 8, 16, 32];
        const target = 64;
        const result = ExponentialSearch.exponentialSearch(array, target);
        expect(result).toBe(-1); 
    });

    test('ExponentialSearchTargetAtBound', () => {
        const array = [1, 2, 4, 8, 16, 32, 64];
        const target = 16;
        const result = ExponentialSearch.exponentialSearch(array, target);
        expect(result).toBe(4); 
    });

    test('ExponentialSearchTargetSmallerThanBound', () => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const target = 3;
        const result = ExponentialSearch.exponentialSearch(array, target);
        expect(result).toBe(2);
    });

    test('ExponentialSearchSparseLargeArray', () => {
        const array = [1, 10, 100, 1000, 10000, 100000];
        const target = 1000;
        const result = ExponentialSearch.exponentialSearch(array, target);
        expect(result).toBe(3); 
    });

    test('ExponentialSearchTargetGreaterThanLargest', () => {
        const array = [2, 4, 6, 8, 10];
        const target = 12;
        const result = ExponentialSearch.exponentialSearch(array, target);
        expect(result).toBe(-1); 
    });

    test('ExponentialSearchTargetLessThanSmallest', () => {
        const array = [5, 10, 15, 20];
        const target = 1;
        const result = ExponentialSearch.exponentialSearch(array, target);
        expect(result).toBe(-1); 
    });

    test('ExponentialSearch1', () => {
        const array = [10, 20, 30, 40, 50];
        const target = 10;
        const result = ExponentialSearch.exponentialSearch(array, target);
        expect(result).toBe(0);
    });

    test('ExponentialSearch2', () => {
        const array = [5, 15, 25, 35, 45];
        const target = 45;
        const result = ExponentialSearch.exponentialSearch(array, target);
        expect(result).toBe(4); 
    });

    test('ExponentialSearch3', () => {
        const array = [2, 4, 6, 8, 10];
        const target = 6;
        const result = ExponentialSearch.exponentialSearch(array, target);
        expect(result).toBe(2); 
    });

    test('ExponentialSearch4', () => {
        const array = [3, 6, 9, 12, 15];
        const target = 10;
        const result = ExponentialSearch.exponentialSearch(array, target);
        expect(result).toBe(-1); 
    });

    test('ExponentialSearch5', () => {
        const array = [];
        const target = 10;
        const result = ExponentialSearch.exponentialSearch(array, target);
        expect(result).toBe(-1); 
    });

    test('ExponentialSearch', () => {
        const array = [1, 1, 1, 1, 1, 1, 1];
        const target = 1;
        const result = ExponentialSearch.exponentialSearch(array, target);
        expect(result).toBe(0); 
    });

    test('ExponentialSearch6', () => {
        const array = [42];
        const target = 42;
        const result = ExponentialSearch.exponentialSearch(array, target);
        expect(result).toBe(0); 
    });




  