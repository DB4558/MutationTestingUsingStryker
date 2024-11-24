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
class Knapsack {
  knapSack(W, wt, val, n) {
    if (stryMutAct_9fa48("494")) {
      {}
    } else {
      stryCov_9fa48("494");
      if (stryMutAct_9fa48("497") ? !wt && !val : stryMutAct_9fa48("496") ? false : stryMutAct_9fa48("495") ? true : (stryCov_9fa48("495", "496", "497"), (stryMutAct_9fa48("498") ? wt : (stryCov_9fa48("498"), !wt)) || (stryMutAct_9fa48("499") ? val : (stryCov_9fa48("499"), !val)))) {
        if (stryMutAct_9fa48("500")) {
          {}
        } else {
          stryCov_9fa48("500");
          throw new Error(stryMutAct_9fa48("501") ? "" : (stryCov_9fa48("501"), "Invalid input: weights or values cannot be null."));
        }
      }
      const dp = Array.from(stryMutAct_9fa48("502") ? {} : (stryCov_9fa48("502"), {
        length: stryMutAct_9fa48("503") ? n - 1 : (stryCov_9fa48("503"), n + 1)
      }), stryMutAct_9fa48("504") ? () => undefined : (stryCov_9fa48("504"), () => stryMutAct_9fa48("505") ? Array().fill(0) : (stryCov_9fa48("505"), Array(stryMutAct_9fa48("506") ? W - 1 : (stryCov_9fa48("506"), W + 1)).fill(0))));
      for (let i = 0; stryMutAct_9fa48("509") ? i > n : stryMutAct_9fa48("508") ? i < n : stryMutAct_9fa48("507") ? false : (stryCov_9fa48("507", "508", "509"), i <= n); stryMutAct_9fa48("510") ? i-- : (stryCov_9fa48("510"), i++)) {
        if (stryMutAct_9fa48("511")) {
          {}
        } else {
          stryCov_9fa48("511");
          for (let w = 0; stryMutAct_9fa48("514") ? w > W : stryMutAct_9fa48("513") ? w < W : stryMutAct_9fa48("512") ? false : (stryCov_9fa48("512", "513", "514"), w <= W); stryMutAct_9fa48("515") ? w-- : (stryCov_9fa48("515"), w++)) {
            if (stryMutAct_9fa48("516")) {
              {}
            } else {
              stryCov_9fa48("516");
              if (stryMutAct_9fa48("519") ? i === 0 && w === 0 : stryMutAct_9fa48("518") ? false : stryMutAct_9fa48("517") ? true : (stryCov_9fa48("517", "518", "519"), (stryMutAct_9fa48("521") ? i !== 0 : stryMutAct_9fa48("520") ? false : (stryCov_9fa48("520", "521"), i === 0)) || (stryMutAct_9fa48("523") ? w !== 0 : stryMutAct_9fa48("522") ? false : (stryCov_9fa48("522", "523"), w === 0)))) {
                if (stryMutAct_9fa48("524")) {
                  {}
                } else {
                  stryCov_9fa48("524");
                  dp[i][w] = 0;
                }
              } else if (stryMutAct_9fa48("528") ? wt[i - 1] > w : stryMutAct_9fa48("527") ? wt[i - 1] < w : stryMutAct_9fa48("526") ? false : stryMutAct_9fa48("525") ? true : (stryCov_9fa48("525", "526", "527", "528"), wt[stryMutAct_9fa48("529") ? i + 1 : (stryCov_9fa48("529"), i - 1)] <= w)) {
                if (stryMutAct_9fa48("530")) {
                  {}
                } else {
                  stryCov_9fa48("530");
                  dp[i][w] = stryMutAct_9fa48("531") ? Math.min(val[i - 1] + dp[i - 1][w - wt[i - 1]], dp[i - 1][w]) : (stryCov_9fa48("531"), Math.max(stryMutAct_9fa48("532") ? val[i - 1] - dp[i - 1][w - wt[i - 1]] : (stryCov_9fa48("532"), val[stryMutAct_9fa48("533") ? i + 1 : (stryCov_9fa48("533"), i - 1)] + dp[stryMutAct_9fa48("534") ? i + 1 : (stryCov_9fa48("534"), i - 1)][stryMutAct_9fa48("535") ? w + wt[i - 1] : (stryCov_9fa48("535"), w - wt[stryMutAct_9fa48("536") ? i + 1 : (stryCov_9fa48("536"), i - 1)])]), dp[stryMutAct_9fa48("537") ? i + 1 : (stryCov_9fa48("537"), i - 1)][w]));
                }
              } else {
                if (stryMutAct_9fa48("538")) {
                  {}
                } else {
                  stryCov_9fa48("538");
                  dp[i][w] = dp[stryMutAct_9fa48("539") ? i + 1 : (stryCov_9fa48("539"), i - 1)][w];
                }
              }
            }
          }
        }
      }
      return dp[n][W];
    }
  }
}
module.exports = Knapsack;