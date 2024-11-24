// @ts-nocheck
function stryNS_9fa48() {
  var g = typeof globalThis === 'object' && globalThis && globalThis.Math === Math && globalThis || new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});
  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }
  function retrieveNS() {
    return ns;
  }
  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}
stryNS_9fa48();
function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });
  function cover() {
    var c = cov.static;
    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }
    var a = arguments;
    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }
  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}
function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();
  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }
      return true;
    }
    return false;
  }
  stryMutAct_9fa48 = isActive;
  return isActive(id);
}
class MatrixChainMultiplication {
  static solve(arr, i, j, dp) {
    if (stryMutAct_9fa48("193")) {
      {}
    } else {
      stryCov_9fa48("193");
      if (stryMutAct_9fa48("196") ? i !== j : stryMutAct_9fa48("195") ? false : stryMutAct_9fa48("194") ? true : (stryCov_9fa48("194", "195", "196"), i === j)) return 0;
      if (stryMutAct_9fa48("199") ? dp[i][j] === -1 : stryMutAct_9fa48("198") ? false : stryMutAct_9fa48("197") ? true : (stryCov_9fa48("197", "198", "199"), dp[i][j] !== (stryMutAct_9fa48("200") ? +1 : (stryCov_9fa48("200"), -1)))) return dp[i][j];
      let mini = Number.MAX_VALUE;
      for (let k = i; stryMutAct_9fa48("203") ? k > j - 1 : stryMutAct_9fa48("202") ? k < j - 1 : stryMutAct_9fa48("201") ? false : (stryCov_9fa48("201", "202", "203"), k <= (stryMutAct_9fa48("204") ? j + 1 : (stryCov_9fa48("204"), j - 1))); stryMutAct_9fa48("205") ? k-- : (stryCov_9fa48("205"), k++)) {
        if (stryMutAct_9fa48("206")) {
          {}
        } else {
          stryCov_9fa48("206");
          const ans = stryMutAct_9fa48("207") ? this.solve(arr, i, k, dp) + this.solve(arr, k + 1, j, dp) - arr[i - 1] * arr[k] * arr[j] : (stryCov_9fa48("207"), (stryMutAct_9fa48("208") ? this.solve(arr, i, k, dp) - this.solve(arr, k + 1, j, dp) : (stryCov_9fa48("208"), this.solve(arr, i, k, dp) + this.solve(arr, stryMutAct_9fa48("209") ? k - 1 : (stryCov_9fa48("209"), k + 1), j, dp))) + (stryMutAct_9fa48("210") ? arr[i - 1] * arr[k] / arr[j] : (stryCov_9fa48("210"), (stryMutAct_9fa48("211") ? arr[i - 1] / arr[k] : (stryCov_9fa48("211"), arr[stryMutAct_9fa48("212") ? i + 1 : (stryCov_9fa48("212"), i - 1)] * arr[k])) * arr[j])));
          mini = stryMutAct_9fa48("213") ? Math.max(mini, ans) : (stryCov_9fa48("213"), Math.min(mini, ans));
        }
      }
      dp[i][j] = mini;
      return dp[i][j];
    }
  }
  static matrixMultiplication(arr, N) {
    if (stryMutAct_9fa48("214")) {
      {}
    } else {
      stryCov_9fa48("214");
      const dp = Array.from(stryMutAct_9fa48("215") ? {} : (stryCov_9fa48("215"), {
        length: N
      }), stryMutAct_9fa48("216") ? () => undefined : (stryCov_9fa48("216"), () => stryMutAct_9fa48("217") ? Array().fill(-1) : (stryCov_9fa48("217"), Array(N).fill(stryMutAct_9fa48("218") ? +1 : (stryCov_9fa48("218"), -1)))));
      const i = 1;
      const j = stryMutAct_9fa48("219") ? N + 1 : (stryCov_9fa48("219"), N - 1);
      return this.solve(arr, i, j, dp);
    }
  }
}
module.exports = MatrixChainMultiplication;