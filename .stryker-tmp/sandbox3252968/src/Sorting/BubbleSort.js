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
class BubbleSort {
  static bubbleSort(arr) {
    if (stryMutAct_9fa48("646")) {
      {}
    } else {
      stryCov_9fa48("646");
      const n = arr.length;
      for (let i = 0; stryMutAct_9fa48("649") ? i >= n - 1 : stryMutAct_9fa48("648") ? i <= n - 1 : stryMutAct_9fa48("647") ? false : (stryCov_9fa48("647", "648", "649"), i < (stryMutAct_9fa48("650") ? n + 1 : (stryCov_9fa48("650"), n - 1))); stryMutAct_9fa48("651") ? i-- : (stryCov_9fa48("651"), i++)) {
        if (stryMutAct_9fa48("652")) {
          {}
        } else {
          stryCov_9fa48("652");
          for (let j = 0; stryMutAct_9fa48("655") ? j >= n - 1 - i : stryMutAct_9fa48("654") ? j <= n - 1 - i : stryMutAct_9fa48("653") ? false : (stryCov_9fa48("653", "654", "655"), j < (stryMutAct_9fa48("656") ? n - 1 + i : (stryCov_9fa48("656"), (stryMutAct_9fa48("657") ? n + 1 : (stryCov_9fa48("657"), n - 1)) - i))); stryMutAct_9fa48("658") ? j-- : (stryCov_9fa48("658"), j++)) {
            if (stryMutAct_9fa48("659")) {
              {}
            } else {
              stryCov_9fa48("659");
              if (stryMutAct_9fa48("663") ? arr[j] <= arr[j + 1] : stryMutAct_9fa48("662") ? arr[j] >= arr[j + 1] : stryMutAct_9fa48("661") ? false : stryMutAct_9fa48("660") ? true : (stryCov_9fa48("660", "661", "662", "663"), arr[j] > arr[stryMutAct_9fa48("664") ? j - 1 : (stryCov_9fa48("664"), j + 1)])) {
                if (stryMutAct_9fa48("665")) {
                  {}
                } else {
                  stryCov_9fa48("665");
                  // Swap the elements
                  let temp = arr[j];
                  arr[j] = arr[stryMutAct_9fa48("666") ? j - 1 : (stryCov_9fa48("666"), j + 1)];
                  arr[stryMutAct_9fa48("667") ? j - 1 : (stryCov_9fa48("667"), j + 1)] = temp;
                }
              }
            }
          }
        }
      }
    }
  }
}
module.exports = BubbleSort;