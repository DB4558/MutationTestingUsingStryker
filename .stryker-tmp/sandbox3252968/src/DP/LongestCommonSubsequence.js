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
class LongestCommonSubsequence {
  lcs(text1, text2) {
    if (stryMutAct_9fa48("44")) {
      {}
    } else {
      stryCov_9fa48("44");
      const n = text1.length;
      const m = text2.length;
      const dp = Array.from(stryMutAct_9fa48("45") ? {} : (stryCov_9fa48("45"), {
        length: stryMutAct_9fa48("46") ? n - 1 : (stryCov_9fa48("46"), n + 1)
      }), stryMutAct_9fa48("47") ? () => undefined : (stryCov_9fa48("47"), () => stryMutAct_9fa48("48") ? Array().fill(0) : (stryCov_9fa48("48"), Array(stryMutAct_9fa48("49") ? m - 1 : (stryCov_9fa48("49"), m + 1)).fill(0))));
      for (let i = 1; stryMutAct_9fa48("52") ? i > n : stryMutAct_9fa48("51") ? i < n : stryMutAct_9fa48("50") ? false : (stryCov_9fa48("50", "51", "52"), i <= n); stryMutAct_9fa48("53") ? i-- : (stryCov_9fa48("53"), i++)) {
        if (stryMutAct_9fa48("54")) {
          {}
        } else {
          stryCov_9fa48("54");
          for (let j = 1; stryMutAct_9fa48("57") ? j > m : stryMutAct_9fa48("56") ? j < m : stryMutAct_9fa48("55") ? false : (stryCov_9fa48("55", "56", "57"), j <= m); stryMutAct_9fa48("58") ? j-- : (stryCov_9fa48("58"), j++)) {
            if (stryMutAct_9fa48("59")) {
              {}
            } else {
              stryCov_9fa48("59");
              if (stryMutAct_9fa48("62") ? text1.charAt(i - 1) !== text2.charAt(j - 1) : stryMutAct_9fa48("61") ? false : stryMutAct_9fa48("60") ? true : (stryCov_9fa48("60", "61", "62"), (stryMutAct_9fa48("63") ? text1 : (stryCov_9fa48("63"), text1.charAt(stryMutAct_9fa48("64") ? i + 1 : (stryCov_9fa48("64"), i - 1)))) === (stryMutAct_9fa48("65") ? text2 : (stryCov_9fa48("65"), text2.charAt(stryMutAct_9fa48("66") ? j + 1 : (stryCov_9fa48("66"), j - 1)))))) {
                if (stryMutAct_9fa48("67")) {
                  {}
                } else {
                  stryCov_9fa48("67");
                  dp[i][j] = stryMutAct_9fa48("68") ? 1 - dp[i - 1][j - 1] : (stryCov_9fa48("68"), 1 + dp[stryMutAct_9fa48("69") ? i + 1 : (stryCov_9fa48("69"), i - 1)][stryMutAct_9fa48("70") ? j + 1 : (stryCov_9fa48("70"), j - 1)]);
                }
              } else {
                if (stryMutAct_9fa48("71")) {
                  {}
                } else {
                  stryCov_9fa48("71");
                  dp[i][j] = stryMutAct_9fa48("72") ? Math.min(dp[i - 1][j], dp[i][j - 1]) : (stryCov_9fa48("72"), Math.max(dp[stryMutAct_9fa48("73") ? i + 1 : (stryCov_9fa48("73"), i - 1)][j], dp[i][stryMutAct_9fa48("74") ? j + 1 : (stryCov_9fa48("74"), j - 1)]));
                }
              }
            }
          }
        }
      }
      return dp[n][m];
    }
  }
}
module.exports = LongestCommonSubsequence;