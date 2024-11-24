// @ts-nocheck

const Knapsack = require('../src/DP/knapsack');
const ks = new Knapsack();

test('Knapsack Test 1', () => {
    const W1 = 100;
    const wt1 = [1, 1, 101];
    const val1 = [10, 20, 31];
    const n1 = wt1.length;
    expect(ks.knapSack(W1, wt1, val1, n1)).toBe(30);
});

test('Knapsack Test 2', () => {
    const W2 = 10;
    const wt2 = [11, 12];
    const val2 = [11, 22];
    const n2 = wt2.length;
    expect(ks.knapSack(W2, wt2, val2, n2)).toBe(0);
});

test('Knapsack Test 3', () => {
    const W3 = 15;
    const wt3 = [15, 100];
    const val3 = [1, 100];
    const n3 = wt3.length;
    expect(ks.knapSack(W3, wt3, val3, n3)).toBe(1);
});

test('Knapsack Test 4', () => {
    const W4 = 25;
    const wt4 = [5, 5, 5, 5, 5, 5];
    const val4 = [1, 4, 3, 7, 2, 8];
    const n4 = wt4.length;
    expect(ks.knapSack(W4, wt4, val4, n4)).toBe(24);
});

test('Knapsack Test - Null weights or values', () => {
    const W = 10;
    const wt = null;
    const val = [10, 20];
    const n = 2;
    expect(() => ks.knapSack(W, wt, val, n)).toThrow("Invalid input: weights or values cannot be null.");
});
test('Knapsack Test - Optimal subset selection', () => {
    const W = 7;
    const wt = [1, 3, 4];
    const val = [1, 4, 5];
    const n = wt.length;
    expect(ks.knapSack(W, wt, val, n)).toBe(9); 
});
test('Knapsack Test - Zero capacity', () => {
    const W = 0;
    const wt = [1, 2, 3];
    const val = [10, 20, 30];
    const n = wt.length;
    expect(ks.knapSack(W, wt, val, n)).toBe(0);
});
test('Knapsack Test - All items too heavy', () => {
    const W = 5;
    const wt = [6, 7, 8];
    const val = [10, 20, 30];
    const n = wt.length;
    expect(ks.knapSack(W, wt, val, n)).toBe(0);
});
test('Knapsack Test - Zero capacity or no items', () => {
    const W = 0;
    const wt = [1, 2, 3];
    const val = [10, 20, 30];
    const n = wt.length;
    expect(ks.knapSack(W, wt, val, n)).toBe(0);  
});
test('Knapsack Test - Item fits into knapsack', () => {
    const W = 10;
    const wt = [5, 6];
    const val = [10, 20];
    const n = wt.length;
    expect(ks.knapSack(W, wt, val, n)).toBe(20);  
});
test('Knapsack Test - Max value calculation', () => {
    const W = 10;
    const wt = [5, 6];
    const val = [10, 20];
    const n = wt.length;
    expect(ks.knapSack(W, wt, val, n)).toBe(20);  
});

const CoinChange = require('../src/DP/coinChange'); 

describe('CoinChange Tests', () => {
    
    test('testMinimumCoinChange1', () => {
        const coins1 = [1, 2, 3];
        const amount1 = 30;
        expect(CoinChange.coinchange(coins1, amount1)).toBe(91);
    });

    test('testMinimumCoinChange2', () => {
        const coins2 = [1];
        const amount2 = 20;
        expect(CoinChange.coinchange(coins2, amount2)).toBe(1);
    });

    test('testMinimumCoinChange3', () => {
        const coins3 = [5];
        const amount3 = 4;
        expect(CoinChange.coinchange(coins3, amount3)).toBe(0);
    });

    test('testMinimumCoinChange4', () => {
        const coins1 = [1, 2, 3, 4, 5];
        const amount1 = 7;
        expect(CoinChange.minimumCoins(coins1, amount1)).toBe(2);
    });

    test('testMinimumCoinChange5', () => {
        const coins2 = [1];
        const amount2 = 10000;
        expect(CoinChange.minimumCoins(coins2, amount2)).toBe(10000);
    });

    test('testMinimumCoinChange6', () => {
        const coins3 = [6, 2, 9, 10];
        const amount3 = 18;
        expect(CoinChange.minimumCoins(coins3, amount3)).toBe(2);
    });

    // Additional test cases to kill mutants:

    test('testMinimumCoinChange7 (Edge Case - Amount 0)', () => {
        const coins1 = [1, 2, 5];
        const amount1 = 0;
        expect(CoinChange.minimumCoins(coins1, amount1)).toBe(0);
    });

    test('testMinimumCoinChange8 (Amount cannot be formed)', () => {
        const coins1 = [5, 10];
        const amount1 = 3;
        expect(CoinChange.minimumCoins(coins1, amount1)).toBe(-1); 
    });

    test('testMinimumCoinChange9 (Edge Case - Only One Coin Type)', () => {
        const coins1 = [7];
        const amount1 = 14;
        expect(CoinChange.minimumCoins(coins1, amount1)).toBe(2);
    });

    test('testMinimumCoinChange11 (High Amount with No Suitable Coins)', () => {
        const coins1 = [1, 2, 4];
        const amount1 = 10;
        expect(CoinChange.minimumCoins(coins1, amount1)).toBe(3); 
    });
});
const EditDistance = require('../src/DP/EditDistance'); 

describe('Edit Distance Tests', () => {

    test('Edit Distance Test 1', () => {
        const eds = new EditDistance();
        const word1 = "abcde";
        const word2 = "a";
        expect(eds.minDistance(word1, word2)).toBe(4);
    });

    test('Edit Distance Test 2', () => {
        const eds = new EditDistance();
        const word1 = "a";
        const word2 = "a";
        expect(eds.minDistance(word1, word2)).toBe(0);
    });

    test('Edit Distance Test 3', () => {
        const eds = new EditDistance();
        const word1 = "bb";
        const word2 = "abb";
        expect(eds.minDistance(word1, word2)).toBe(1);
    });

    test('Edit Distance Test 4', () => {
        const eds = new EditDistance();
        const word1 = "abba";
        const word2 = "abccba";
        expect(eds.minDistance(word1, word2)).toBe(2);
    });

    // Additional test cases to kill mutants

    test('Edit Distance Test 5 (empty strings)', () => {
        const eds = new EditDistance();
        const word1 = "";
        const word2 = "hello";
        expect(eds.minDistance(word1, word2)).toBe(5);  
    });

    test('Edit Distance Test 6 (identical strings)', () => {
        const eds = new EditDistance();
        const word1 = "kitten";
        const word2 = "kitten";
        expect(eds.minDistance(word1, word2)).toBe(0);  
    });

    test('Edit Distance Test 7 (long strings)', () => {
        const eds = new EditDistance();
        const word1 = "sitting";
        const word2 = "kitten";
        expect(eds.minDistance(word1, word2)).toBe(3); 
    });

    test('Edit Distance Test 8 (one character change)', () => {
        const eds = new EditDistance();
        const word1 = "flaw";
        const word2 = "lawn";
        expect(eds.minDistance(word1, word2)).toBe(2);  
    });

    test('Edit Distance Test 9 (different lengths)', () => {
        const eds = new EditDistance();
        const word1 = "abcdef";
        const word2 = "ab";
        expect(eds.minDistance(word1, word2)).toBe(4);  
    });

    test('Edit Distance Test 10 (deleting all characters)', () => {
        const eds = new EditDistance();
        const word1 = "hello";
        const word2 = "";
        expect(eds.minDistance(word1, word2)).toBe(5);  
    });

    const LongestCommonSubsequence = require('../src/DP/LongestCommonSubsequence'); 


    const lcs = new LongestCommonSubsequence();

    test('Test LCS 1: Partial match interleaved with mismatch', () => {
        expect(lcs.lcs("abcdxyz", "axbycz")).toBe(4);
    });

    test('Test LCS 2: Completely mismatch', () => {
        expect(lcs.lcs("abc", "xyz")).toBe(0);
    });

    test('Test LCS 3: Interleaved match', () => {
        expect(lcs.lcs("abcde", "acebd")).toBe(3);
    });

    test('Test LCS 4: Single character match', () => {
        expect(lcs.lcs("a", "a")).toBe(1);
        expect(lcs.lcs("a", "z")).toBe(0);
    });

    test('Test LCS Empty: Either string is empty', () => {
        expect(lcs.lcs("", "")).toBe(0);
    });

    test('Test LCS Full Match: Identical strings', () => {
        expect(lcs.lcs("hello", "hello")).toBe(5);
    });

    test('Test LCS Repeated Characters', () => {
        expect(lcs.lcs("aaa", "aaa")).toBe(3);
        expect(lcs.lcs("aaa", "aa")).toBe(2);
    });

    test('Test LCS 5: First string is empty', () => {
        expect(lcs.lcs("", "abc")).toBe(0);
    });

    test('Test LCS 6: Second string is empty', () => {
        expect(lcs.lcs("abc", "")).toBe(0);
    });

    test('Test LCS 7: One character match', () => {
        expect(lcs.lcs("a", "a")).toBe(1);
    });

    test('Test LCS 8: Prefix match', () => {
        expect(lcs.lcs("abcdef", "abc")).toBe(3);
    });

    test('Test LCS 9: Alternating matches', () => {
        expect(lcs.lcs("abcde", "ace")).toBe(3);
    });
});

const LongestIncreasingSubsequence = require('../src/DP/LongestIncreasingSubsequence'); 



    test('testLIS1', () => {
        const arr1 = [];
        expect(LongestIncreasingSubsequence.LIS(arr1)).toBe(0);
    });

    test('testLIS2', () => {
        const arr2 = [1];
        expect(LongestIncreasingSubsequence.LIS(arr2)).toBe(1);
    });

    test('testLIS3', () => {
        const arr3 = [1, 2];
        expect(LongestIncreasingSubsequence.LIS(arr3)).toBe(2);
    });

    test('testLIS4', () => {
        const arr4 = [2, 1];
        expect(LongestIncreasingSubsequence.LIS(arr4)).toBe(1);
    });

    test('testLIS5', () => {
        const arr5 = [1, 2, 2, 5];
        expect(LongestIncreasingSubsequence.LIS(arr5)).toBe(3);
    });

    test('testLIS6', () => {
        const arr6 = [1, 1, 1, 1, 1];
        expect(LongestIncreasingSubsequence.LIS(arr6)).toBe(1);
    });

    test('testLISMixed', () => {
        const arr = [3, 10, 2, 1, 20];
        expect(LongestIncreasingSubsequence.LIS(arr)).toBe(3);
    });

    test('testLISMultipleSubsequences', () => {
        const arr = [10, 22, 9, 33, 21, 50, 41, 60];
        expect(LongestIncreasingSubsequence.LIS(arr)).toBe(5);
    });

    test('testLISRepeatedSequences', () => {
        const arr = [3, 2, 6, 4, 5, 1, 2, 7];
        expect(LongestIncreasingSubsequence.LIS(arr)).toBe(4);
    });

    test('testFindLISLen2', () => {
        const arr2 = [100];
        expect(LongestIncreasingSubsequence.findLISLen(arr2)).toBe(1);
    });

    test('testFindLISLen3', () => {
        const arr3 = [5, 4];
        expect(LongestIncreasingSubsequence.findLISLen(arr3)).toBe(1);
    });

   

    test('testFindLISLen5', () => {
        const arr6 = [1, 4, 7, 3, 7, 9];
        expect(LongestIncreasingSubsequence.findLISLen(arr6)).toBe(3);
    });

    test('testFindLISLen6', () => {
        const arr7 = [1];
        expect(LongestIncreasingSubsequence.findLISLen(arr7)).toBe(1);
    });

    test('testFindLISLen7', () => {
        const arr8 = [1, 3, 6, 2, 6, 82, 6, 8, 2];
        expect(LongestIncreasingSubsequence.findLISLen(arr8)).toBe(3);
    });

    test('testFindLISLen8', () => {
        const arr9 = [5, 2, 4, 7, 92, 6, 7, 3, 6, 7];
        expect(LongestIncreasingSubsequence.findLISLen(arr9)).toBe(3);
    });

    const LongestPalindromicSubsequence = require('../src/DP/LongestPalindromicSubsequence');

    
    
    test('LPS for single character string', () => {
        expect(LongestPalindromicSubsequence.LPS("a")).toBe("a");
    });
    
    test('LPS for a full palindromic string', () => {
        expect(LongestPalindromicSubsequence.LPS("abcdcba")).toBe("abcdcba");
    });
    
    test('LPS for non-palindromic string', () => {
        expect(LongestPalindromicSubsequence.LPS("abcdef")).toBe("a");
    });
    
    test('LPS for a string with repeated characters', () => {
        expect(LongestPalindromicSubsequence.LPS("acee")).toBe("ee");
    });
    
    test('LPS for mixed palindromic subsequences', () => {
        expect(LongestPalindromicSubsequence.LPS("abacdfgdcaba")).toBe("abacdfdcaba");
    });
    
    test('LPS for a long repeating character string', () => {
        expect(LongestPalindromicSubsequence.LPS("aaaaaaa")).toBe("aaaaaaa");
    });
    
    test('LPS for palindrome with non-palindromic prefix/suffix', () => {
        expect(LongestPalindromicSubsequence.LPS("xyzabccbayz")).toBe("yabccbay");
    });
    
    test('LPS for a completely mismatched string', () => {
        expect(LongestPalindromicSubsequence.LPS("abcde")).toBe("a");
    });
    
    test('LPS for a palindrome with extra middle characters', () => {
        expect(LongestPalindromicSubsequence.LPS("abcbaedf")).toBe("abcba");
    });
    
    const MatrixChainMultiplication = require('../src/DP/MatrixChainMultiplication');

   
        test('Test Case 1: Single multiplication (2 matrices)', () => {
            const arr = [10, 20, 30];
            const N = 3;
            const result = MatrixChainMultiplication.matrixMultiplication(arr, N);
            expect(result).toBe(6000);
        });
    
        test('Test Case 2: Chain with 3 matrices', () => {
            const arr = [10, 20, 30, 40];
            const N = 4;
            const result = MatrixChainMultiplication.matrixMultiplication(arr, N);
            expect(result).toBe(18000);
        });
    
        test('Test Case 3: Equal dimensions for matrices', () => {
            const arr = [10, 10, 10, 10];
            const N = 4;
            const result = MatrixChainMultiplication.matrixMultiplication(arr, N);
            expect(result).toBe(2000);
        });
    
        test('Test Case 4: Longer chain with 4 matrices', () => {
            const arr = [10, 20, 30, 40, 50];
            const N = 5;
            const result = MatrixChainMultiplication.matrixMultiplication(arr, N);
            expect(result).toBe(38000);
        });
        const PalindromePartitioning = require('../src/DP/PalindromePartitioning');

        describe('Palindrome Partitioning Tests', () => {
            test('Test Case 2: Single character string', () => {
                const s2 = 'a';
                expect(PalindromePartitioning.minimalPartitions(s2)).toBe(0);
            });
        
            test('Test Case 3: Two-character palindrome', () => {
                const s3 = 'aa';
                expect(PalindromePartitioning.minimalPartitions(s3)).toBe(0);
            });
        
            test('Test Case 4: Odd-length palindrome', () => {
                const s4 = 'aba';
                expect(PalindromePartitioning.minimalPartitions(s4)).toBe(0);
            });
        
            test('Test Case 5: Two-character non-palindrome', () => {
                const s5 = 'ab';
                expect(PalindromePartitioning.minimalPartitions(s5)).toBe(1);
            });
        
            test('Test Case 6: Mixed string', () => {
                const s6 = 'pqqabb';
                expect(PalindromePartitioning.minimalPartitions(s6)).toBe(3);
            });
        });
        
        const RodCutting = require('../src/DP/RodCutting');

        describe('Rod Cutting Tests', () => {
            test('Test Case 1: Single length rod', () => {
                const prices = [2];
                const n = 1;
                expect(RodCutting.cutRod(prices, n)).toBe(2);
            });
        
            test('Test Case 2: Multiple lengths, full cut', () => {
                const prices = [1, 5, 8, 9, 10, 17, 17, 20];
                const n = 8;
                expect(RodCutting.cutRod(prices, n)).toBe(22);
            });
        
            test('Test Case 3: Single length rod, no cuts', () => {
                const prices = [3];
                const n = 1;
                expect(RodCutting.cutRod(prices, n)).toBe(3);
            });
        
            test('Test Case 4: Multiple lengths, mixed cuts', () => {
                const prices = [3, 5, 8, 9];
                const n = 4;
                expect(RodCutting.cutRod(prices, n)).toBe(12);
            });
        
            test('Test Case 5: Rod with no value', () => {
                const prices = [];
                const n = 0;
                expect(RodCutting.cutRod(prices, n)).toBe(0);
            });
        });
        
        const ShortestCommonSupersequence = require('../src/DP/ShortestCommonSpersequence');

    
            test('Test Case 1: No characters in common', () => {
                expect(ShortestCommonSupersequence.shortestCommonSupersequence("abc", "def"))
                    .toBe("abcdef");
            });
        
            test('Test Case 2: Identical strings', () => {
                expect(ShortestCommonSupersequence.shortestCommonSupersequence("abc", "abc"))
                    .toBe("abc");
            });
        
            test('Test Case 3: Interleaved characters', () => {
                expect(ShortestCommonSupersequence.shortestCommonSupersequence("abc", "ebd"))
                    .toBe("aebcd");
            });
        
            test('Test Case 4: Single character tests', () => {
                expect(ShortestCommonSupersequence.shortestCommonSupersequence("a", "c"))
                    .toBe("ac");
                expect(ShortestCommonSupersequence.shortestCommonSupersequence("a", "a"))
                    .toBe("a");
            });
        
        
            test('Test Case 5: One string is empty', () => {
                expect(ShortestCommonSupersequence.shortestCommonSupersequence("", "abc"))
                    .toBe("abc");
                expect(ShortestCommonSupersequence.shortestCommonSupersequence("abc", ""))
                    .toBe("abc");
            });
            
            test('Test Case 6: No common characters, one empty', () => {
                expect(ShortestCommonSupersequence.shortestCommonSupersequence("abc", "xyz"))
                    .toBe("abcxyz");
            });
            
            test('Test Case 7: Strings with repeated characters', () => {
                expect(ShortestCommonSupersequence.shortestCommonSupersequence("aaa", "aa"))
                    .toBe("aaa");
                expect(ShortestCommonSupersequence.shortestCommonSupersequence("aabb", "ab"))
                    .toBe("aabb");
            });
            
            test('Test Case 8: One string is a subsequence of the other', () => {
                expect(ShortestCommonSupersequence.shortestCommonSupersequence("abc", "ab"))
                    .toBe("abc");
                expect(ShortestCommonSupersequence.shortestCommonSupersequence("abc", "bc"))
                    .toBe("abc");
            });
            
            test('Test Case 9: Longer strings with multiple overlaps', () => {
                expect(ShortestCommonSupersequence.shortestCommonSupersequence("abcdefg", "acef"))
                    .toBe("abcdefg");
            });
            
            test('Test Case 11: Mixed case strings', () => {
                expect(ShortestCommonSupersequence.shortestCommonSupersequence("AbcD", "abcd"))
                    .toBe("AabcDd");
            });
            
            test('Test Case 12: Strings of different lengths', () => {
                expect(ShortestCommonSupersequence.shortestCommonSupersequence("ab", "abcdef"))
                    .toBe("abcdef");
            });
            
            test('Test Case 13: Strings with alternating characters', () => {
                expect(ShortestCommonSupersequence.shortestCommonSupersequence("abab", "baba"))
                    .toBe("ababa");
            });


            const StockBuyAndSell = require('../src/DP/StockBuyAndSell');

            test('Test Case 1: Profitable scenario (ascending prices)', () => {
                const Arr = [1, 2, 3, 4, 5];
                const n = 5;
                const result = StockBuyAndSell.getMaximumProfit(Arr, n);
                expect(result).toBe(4);
            });
            
            test('Test Case 2: No profit (descending prices)', () => {
                const Arr = [5, 4, 3, 2, 1];
                const n = 5;
                const result = StockBuyAndSell.getMaximumProfit(Arr, n);
                expect(result).toBe(0);
            });
            
            test('Test Case 3: Only one day (no profit)', () => {
                const Arr = [5];
                const n = 1;
                const result = StockBuyAndSell.getMaximumProfit(Arr, n);
                expect(result).toBe(0);
            });
            
            test('Test Case 4: Two days with decreasing price', () => {
                const Arr = [10, 5];
                const n = 2;
                const result = StockBuyAndSell.getMaximumProfit(Arr, n);
                expect(result).toBe(0);
            });
            
            test('Test Case 5: Two days with increasing price', () => {
                const Arr = [2, 8];
                const n = 2;
                const result = StockBuyAndSell.getMaximumProfit(Arr, n);
                expect(result).toBe(6);
            });
            
            test('Test Case 6: All prices are the same', () => {
                const Arr = [5, 5, 5, 5, 5];
                const n = 5;
                const result = StockBuyAndSell.getMaximumProfit(Arr, n);
                expect(result).toBe(0);
            });
            
          
            test('Test Case 8: Large price values', () => {
                const Arr = [1000, 5000, 3000, 7000];
                const n = 4;
                const result = StockBuyAndSell.getMaximumProfit(Arr, n);
                expect(result).toBe(8000);
            });
            
            test('Test Case 9: No chance to make profit (prices constantly decrease)', () => {
                const Arr = [10, 9, 8, 7, 6, 5];
                const n = 6;
                const result = StockBuyAndSell.getMaximumProfit(Arr, n);
                expect(result).toBe(0);
            });
            
            test('Test Case 10: Long sequence with large prices', () => {
                const Arr = [100, 200, 150, 170, 180, 250, 300];
                const n = 7;
                const result = StockBuyAndSell.getMaximumProfit(Arr, n);
                expect(result).toBe(250);
            });
            
            test('Test Case 11: Prices are increasing and decreasing alternatively', () => {
                const Arr = [1, 5, 2, 8, 3, 6, 4];
                const n = 7;
                const result = StockBuyAndSell.getMaximumProfit(Arr, n);
                expect(result).toBe(13);
            });
            

            const TargetSum = require('../src/DP/TargetSum');

            test('Test Case 1: Example with multiple 1s', () => {
              const nums = [1, 1, 1, 1, 1];
              const target = 3;
              const expected = 5;
              expect(TargetSum.findTargetSumWays(nums, target)).toBe(expected);
            });
            
            test('Test Case 2: All zeros', () => {
              const nums = [0, 0, 0, 0, 0];
              const target = 0;
              const expected = 32;
              expect(TargetSum.findTargetSumWays(nums, target)).toBe(expected);
            });
            
            test('Test Case 3: Single large number', () => {
              const nums = [100];
              const target = -200;
              const expected = 0;
              expect(TargetSum.findTargetSumWays(nums, target)).toBe(expected);
            });
            
            test('Test Case 4: Single element matching target', () => {
              const nums = [3];
              const target = 3;
              const expected = 1;
              expect(TargetSum.findTargetSumWays(nums, target)).toBe(expected);
            });

            const UniquePaths=require('../src/DP/UniquePaths');

            test('Test Case 1: 1x1 Grid', () => {
                expect(UniquePaths.uniquePathsDP(1, 1)).toBe(1);
              });
            
              test('Test Case 2: 1x100 Grid', () => {
                expect(UniquePaths.uniquePathsDP(1, 100)).toBe(1);
              });
            
              test('Test Case 3: 5x100 Grid', () => {
                expect(UniquePaths.uniquePathsDP(5, 100)).toBe(4421275);  // Expected value needs to be validated
              });
            
              test('Test Case 4: 4x4 Grid', () => {
                expect(UniquePaths.uniquePathsDP(4, 4)).toBe(20);
              });
            
              test('Test Case 5: Large Grid 10x10', () => {
                expect(UniquePaths.uniquePathsDP(10, 10)).toBe(48620);
              });
            
              test('Test Case 6: Large Grid 100x100', () => {
                expect(UniquePaths.uniquePathsDP(100, 100)).toBeGreaterThan(0);  // Just checking if it's a large value
              });
            
              test('Test Case 7: Narrow Grid 100x1', () => {
                expect(UniquePaths.uniquePathsDP(100, 1)).toBe(1);
              });
            
              test('Test Case 8: Wide Grid 1x1000', () => {
                expect(UniquePaths.uniquePathsDP(1, 1000)).toBe(1);
              });
            
