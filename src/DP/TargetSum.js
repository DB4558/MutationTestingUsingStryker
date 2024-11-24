const TargetSum = {
    findTargetSumWays: function (nums, target) {
      let sum = 0;
      for (let num of nums) {
        sum += num;
      }
      if ((target + sum) % 2 !== 0 || (target + sum) < 0) {
        return 0;
      }
      const diff = (target + sum) / 2;
      const dp = new Array(diff + 1).fill(0);
      dp[0] = 1;
      for (let num of nums) {
        for (let j = diff; j >= num; j--) {
          dp[j] += dp[j - num];
        }
      }
      return dp[diff];
    }
  };
  
  module.exports = TargetSum;
  