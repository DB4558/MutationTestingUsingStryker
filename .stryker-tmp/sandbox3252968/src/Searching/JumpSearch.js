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
class JumpSearch {
  static jumpSearch(arr, target) {
    if (stryMutAct_9fa48("604")) {
      {}
    } else {
      stryCov_9fa48("604");
      const n = arr.length;

      // Determine the optimal jump size
      let step = Math.floor(Math.sqrt(n));

      // Find the block where the element might be present
      let prev = 0;
      while (stryMutAct_9fa48("606") ? prev < n || arr[Math.min(step, n) - 1] < target : stryMutAct_9fa48("605") ? false : (stryCov_9fa48("605", "606"), (stryMutAct_9fa48("609") ? prev >= n : stryMutAct_9fa48("608") ? prev <= n : stryMutAct_9fa48("607") ? true : (stryCov_9fa48("607", "608", "609"), prev < n)) && (stryMutAct_9fa48("612") ? arr[Math.min(step, n) - 1] >= target : stryMutAct_9fa48("611") ? arr[Math.min(step, n) - 1] <= target : stryMutAct_9fa48("610") ? true : (stryCov_9fa48("610", "611", "612"), arr[stryMutAct_9fa48("613") ? Math.min(step, n) + 1 : (stryCov_9fa48("613"), (stryMutAct_9fa48("614") ? Math.max(step, n) : (stryCov_9fa48("614"), Math.min(step, n))) - 1)] < target)))) {
        if (stryMutAct_9fa48("615")) {
          {}
        } else {
          stryCov_9fa48("615");
          prev = step;
          stryMutAct_9fa48("616") ? step -= Math.floor(Math.sqrt(n)) : (stryCov_9fa48("616"), step += Math.floor(Math.sqrt(n)));

          // If we go beyond the array size
          if (stryMutAct_9fa48("620") ? prev < n : stryMutAct_9fa48("619") ? prev > n : stryMutAct_9fa48("618") ? false : stryMutAct_9fa48("617") ? true : (stryCov_9fa48("617", "618", "619", "620"), prev >= n)) {
            if (stryMutAct_9fa48("621")) {
              {}
            } else {
              stryCov_9fa48("621");
              return stryMutAct_9fa48("622") ? +1 : (stryCov_9fa48("622"), -1);
            }
          }
        }
      }

      // Perform linear search in the identified block
      return this.linearSearch(arr, target, prev, stryMutAct_9fa48("623") ? Math.max(step, n) : (stryCov_9fa48("623"), Math.min(step, n)));
    }
  }
  static linearSearch(arr, target, start, end) {
    if (stryMutAct_9fa48("624")) {
      {}
    } else {
      stryCov_9fa48("624");
      for (let i = start; stryMutAct_9fa48("627") ? i >= end : stryMutAct_9fa48("626") ? i <= end : stryMutAct_9fa48("625") ? false : (stryCov_9fa48("625", "626", "627"), i < end); stryMutAct_9fa48("628") ? i-- : (stryCov_9fa48("628"), i++)) {
        if (stryMutAct_9fa48("629")) {
          {}
        } else {
          stryCov_9fa48("629");
          if (stryMutAct_9fa48("632") ? arr[i] !== target : stryMutAct_9fa48("631") ? false : stryMutAct_9fa48("630") ? true : (stryCov_9fa48("630", "631", "632"), arr[i] === target)) {
            if (stryMutAct_9fa48("633")) {
              {}
            } else {
              stryCov_9fa48("633");
              return i;
            }
          }
        }
      }
      return stryMutAct_9fa48("634") ? +1 : (stryCov_9fa48("634"), -1);
    }
  }
}
module.exports = JumpSearch;