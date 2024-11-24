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
class CountingSort {
  static countingSort(arr) {
    if (stryMutAct_9fa48("668")) {
      {}
    } else {
      stryCov_9fa48("668");
      if (stryMutAct_9fa48("671") ? arr.length !== 0 : stryMutAct_9fa48("670") ? false : stryMutAct_9fa48("669") ? true : (stryCov_9fa48("669", "670", "671"), arr.length === 0)) return arr;
      const max = stryMutAct_9fa48("672") ? Math.min(...arr) : (stryCov_9fa48("672"), Math.max(...arr));
      const min = stryMutAct_9fa48("673") ? Math.max(...arr) : (stryCov_9fa48("673"), Math.min(...arr));
      const range = stryMutAct_9fa48("674") ? max - min - 1 : (stryCov_9fa48("674"), (stryMutAct_9fa48("675") ? max + min : (stryCov_9fa48("675"), max - min)) + 1);

      // Create and initialize the counting array
      const count = stryMutAct_9fa48("676") ? Array().fill(0) : (stryCov_9fa48("676"), Array(range).fill(0));

      // Store the count of each number
      for (let i = 0; stryMutAct_9fa48("679") ? i >= arr.length : stryMutAct_9fa48("678") ? i <= arr.length : stryMutAct_9fa48("677") ? false : (stryCov_9fa48("677", "678", "679"), i < arr.length); stryMutAct_9fa48("680") ? i-- : (stryCov_9fa48("680"), i++)) {
        if (stryMutAct_9fa48("681")) {
          {}
        } else {
          stryCov_9fa48("681");
          stryMutAct_9fa48("682") ? count[arr[i] - min]-- : (stryCov_9fa48("682"), count[stryMutAct_9fa48("683") ? arr[i] + min : (stryCov_9fa48("683"), arr[i] - min)]++);
        }
      }

      // Reconstruct the sorted array
      let index = 0;
      for (let i = 0; stryMutAct_9fa48("686") ? i >= range : stryMutAct_9fa48("685") ? i <= range : stryMutAct_9fa48("684") ? false : (stryCov_9fa48("684", "685", "686"), i < range); stryMutAct_9fa48("687") ? i-- : (stryCov_9fa48("687"), i++)) {
        if (stryMutAct_9fa48("688")) {
          {}
        } else {
          stryCov_9fa48("688");
          while (stryMutAct_9fa48("691") ? count[i] <= 0 : stryMutAct_9fa48("690") ? count[i] >= 0 : stryMutAct_9fa48("689") ? false : (stryCov_9fa48("689", "690", "691"), count[i] > 0)) {
            if (stryMutAct_9fa48("692")) {
              {}
            } else {
              stryCov_9fa48("692");
              arr[stryMutAct_9fa48("693") ? index-- : (stryCov_9fa48("693"), index++)] = stryMutAct_9fa48("694") ? i - min : (stryCov_9fa48("694"), i + min);
              stryMutAct_9fa48("695") ? count[i]++ : (stryCov_9fa48("695"), count[i]--);
            }
          }
        }
      }
      return arr;
    }
  }
}
module.exports = CountingSort;