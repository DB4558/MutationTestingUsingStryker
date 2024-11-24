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
class StockBuyAndSell {
  static getMaximumProfit(prices, n) {
    if (stryMutAct_9fa48("378")) {
      {}
    } else {
      stryCov_9fa48("378");
      const dp = Array.from(stryMutAct_9fa48("379") ? {} : (stryCov_9fa48("379"), {
        length: stryMutAct_9fa48("380") ? n - 1 : (stryCov_9fa48("380"), n + 1)
      }), stryMutAct_9fa48("381") ? () => undefined : (stryCov_9fa48("381"), () => stryMutAct_9fa48("382") ? Array().fill(0) : (stryCov_9fa48("382"), Array(2).fill(0))));

      // Base case: no profit possible if we're past the last day
      dp[n][0] = dp[n][1] = 0;
      for (let ind = stryMutAct_9fa48("383") ? n + 1 : (stryCov_9fa48("383"), n - 1); stryMutAct_9fa48("386") ? ind < 0 : stryMutAct_9fa48("385") ? ind > 0 : stryMutAct_9fa48("384") ? false : (stryCov_9fa48("384", "385", "386"), ind >= 0); stryMutAct_9fa48("387") ? ind++ : (stryCov_9fa48("387"), ind--)) {
        if (stryMutAct_9fa48("388")) {
          {}
        } else {
          stryCov_9fa48("388");
          for (let buy = 0; stryMutAct_9fa48("391") ? buy > 1 : stryMutAct_9fa48("390") ? buy < 1 : stryMutAct_9fa48("389") ? false : (stryCov_9fa48("389", "390", "391"), buy <= 1); stryMutAct_9fa48("392") ? buy-- : (stryCov_9fa48("392"), buy++)) {
            if (stryMutAct_9fa48("393")) {
              {}
            } else {
              stryCov_9fa48("393");
              if (stryMutAct_9fa48("396") ? buy !== 0 : stryMutAct_9fa48("395") ? false : stryMutAct_9fa48("394") ? true : (stryCov_9fa48("394", "395", "396"), buy === 0)) {
                if (stryMutAct_9fa48("397")) {
                  {}
                } else {
                  stryCov_9fa48("397");
                  dp[ind][buy] = stryMutAct_9fa48("398") ? Math.min(0 + dp[ind + 1][0], -prices[ind] + dp[ind + 1][1]) : (stryCov_9fa48("398"), Math.max(stryMutAct_9fa48("399") ? 0 - dp[ind + 1][0] : (stryCov_9fa48("399"), 0 + dp[stryMutAct_9fa48("400") ? ind - 1 : (stryCov_9fa48("400"), ind + 1)][0]), stryMutAct_9fa48("401") ? -prices[ind] - dp[ind + 1][1] : (stryCov_9fa48("401"), (stryMutAct_9fa48("402") ? +prices[ind] : (stryCov_9fa48("402"), -prices[ind])) + dp[stryMutAct_9fa48("403") ? ind - 1 : (stryCov_9fa48("403"), ind + 1)][1])));
                }
              } else {
                if (stryMutAct_9fa48("404")) {
                  {}
                } else {
                  stryCov_9fa48("404");
                  dp[ind][buy] = stryMutAct_9fa48("405") ? Math.min(0 + dp[ind + 1][1], prices[ind] + dp[ind + 1][0]) : (stryCov_9fa48("405"), Math.max(stryMutAct_9fa48("406") ? 0 - dp[ind + 1][1] : (stryCov_9fa48("406"), 0 + dp[stryMutAct_9fa48("407") ? ind - 1 : (stryCov_9fa48("407"), ind + 1)][1]), stryMutAct_9fa48("408") ? prices[ind] - dp[ind + 1][0] : (stryCov_9fa48("408"), prices[ind] + dp[stryMutAct_9fa48("409") ? ind - 1 : (stryCov_9fa48("409"), ind + 1)][0])));
                }
              }
            }
          }
        }
      }
      return dp[0][0];
    }
  }
}
module.exports = StockBuyAndSell;