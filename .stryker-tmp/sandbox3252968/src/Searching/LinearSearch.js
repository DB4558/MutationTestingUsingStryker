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
class LinearSearch {
  static linearSearch(arr, target) {
    if (stryMutAct_9fa48("635")) {
      {}
    } else {
      stryCov_9fa48("635");
      for (let i = 0; stryMutAct_9fa48("638") ? i >= arr.length : stryMutAct_9fa48("637") ? i <= arr.length : stryMutAct_9fa48("636") ? false : (stryCov_9fa48("636", "637", "638"), i < arr.length); stryMutAct_9fa48("639") ? i-- : (stryCov_9fa48("639"), i++)) {
        if (stryMutAct_9fa48("640")) {
          {}
        } else {
          stryCov_9fa48("640");
          if (stryMutAct_9fa48("643") ? arr[i] !== target : stryMutAct_9fa48("642") ? false : stryMutAct_9fa48("641") ? true : (stryCov_9fa48("641", "642", "643"), arr[i] === target)) {
            if (stryMutAct_9fa48("644")) {
              {}
            } else {
              stryCov_9fa48("644");
              return i;
            }
          }
        }
      }
      return stryMutAct_9fa48("645") ? +1 : (stryCov_9fa48("645"), -1);
    }
  }
}
module.exports = LinearSearch;