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
class InsertionSort {
  static insertionSort(arr) {
    if (stryMutAct_9fa48("741")) {
      {}
    } else {
      stryCov_9fa48("741");
      const n = arr.length;
      for (let i = 1; stryMutAct_9fa48("744") ? i >= n : stryMutAct_9fa48("743") ? i <= n : stryMutAct_9fa48("742") ? false : (stryCov_9fa48("742", "743", "744"), i < n); stryMutAct_9fa48("745") ? i-- : (stryCov_9fa48("745"), i++)) {
        if (stryMutAct_9fa48("746")) {
          {}
        } else {
          stryCov_9fa48("746");
          let key = arr[i];
          let j = stryMutAct_9fa48("747") ? i + 1 : (stryCov_9fa48("747"), i - 1);
          while (stryMutAct_9fa48("749") ? j >= 0 || arr[j] > key : stryMutAct_9fa48("748") ? false : (stryCov_9fa48("748", "749"), (stryMutAct_9fa48("752") ? j < 0 : stryMutAct_9fa48("751") ? j > 0 : stryMutAct_9fa48("750") ? true : (stryCov_9fa48("750", "751", "752"), j >= 0)) && (stryMutAct_9fa48("755") ? arr[j] <= key : stryMutAct_9fa48("754") ? arr[j] >= key : stryMutAct_9fa48("753") ? true : (stryCov_9fa48("753", "754", "755"), arr[j] > key)))) {
            if (stryMutAct_9fa48("756")) {
              {}
            } else {
              stryCov_9fa48("756");
              arr[stryMutAct_9fa48("757") ? j - 1 : (stryCov_9fa48("757"), j + 1)] = arr[j];
              j = stryMutAct_9fa48("758") ? j + 1 : (stryCov_9fa48("758"), j - 1);
            }
          }
          arr[stryMutAct_9fa48("759") ? j - 1 : (stryCov_9fa48("759"), j + 1)] = key;
        }
      }
    }
  }
}
module.exports = InsertionSort;