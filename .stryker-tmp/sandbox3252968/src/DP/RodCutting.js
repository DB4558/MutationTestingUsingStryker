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
class RodCutting {
  static cutRod(price, n) {
    if (stryMutAct_9fa48("286")) {
      {}
    } else {
      stryCov_9fa48("286");
      const val = (stryMutAct_9fa48("287") ? new Array() : (stryCov_9fa48("287"), new Array(stryMutAct_9fa48("288") ? n - 1 : (stryCov_9fa48("288"), n + 1)))).fill(0);
      for (let i = 1; stryMutAct_9fa48("291") ? i > n : stryMutAct_9fa48("290") ? i < n : stryMutAct_9fa48("289") ? false : (stryCov_9fa48("289", "290", "291"), i <= n); stryMutAct_9fa48("292") ? i-- : (stryCov_9fa48("292"), i++)) {
        if (stryMutAct_9fa48("293")) {
          {}
        } else {
          stryCov_9fa48("293");
          let max_val = Number.MIN_SAFE_INTEGER;
          for (let j = 0; stryMutAct_9fa48("296") ? j >= i : stryMutAct_9fa48("295") ? j <= i : stryMutAct_9fa48("294") ? false : (stryCov_9fa48("294", "295", "296"), j < i); stryMutAct_9fa48("297") ? j-- : (stryCov_9fa48("297"), j++)) {
            if (stryMutAct_9fa48("298")) {
              {}
            } else {
              stryCov_9fa48("298");
              max_val = stryMutAct_9fa48("299") ? Math.min(max_val, price[j] + val[i - j - 1]) : (stryCov_9fa48("299"), Math.max(max_val, stryMutAct_9fa48("300") ? price[j] - val[i - j - 1] : (stryCov_9fa48("300"), price[j] + val[stryMutAct_9fa48("301") ? i - j + 1 : (stryCov_9fa48("301"), (stryMutAct_9fa48("302") ? i + j : (stryCov_9fa48("302"), i - j)) - 1)])));
            }
          }
          val[i] = max_val;
        }
      }
      return val[n];
    }
  }
}
module.exports = RodCutting;