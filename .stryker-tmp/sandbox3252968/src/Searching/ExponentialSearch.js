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
class ExponentialSearch {
  static exponentialSearch(arr, target) {
    if (stryMutAct_9fa48("562")) {
      {}
    } else {
      stryCov_9fa48("562");
      const n = arr.length;

      // If the target is at the first position
      if (stryMutAct_9fa48("565") ? n !== 0 : stryMutAct_9fa48("564") ? false : stryMutAct_9fa48("563") ? true : (stryCov_9fa48("563", "564", "565"), n === 0)) return stryMutAct_9fa48("566") ? +1 : (stryCov_9fa48("566"), -1);
      if (stryMutAct_9fa48("569") ? arr[0] !== target : stryMutAct_9fa48("568") ? false : stryMutAct_9fa48("567") ? true : (stryCov_9fa48("567", "568", "569"), arr[0] === target)) return 0;

      // Find the range where the target might exist
      let bound = 1;
      while (stryMutAct_9fa48("571") ? bound < n || arr[bound] <= target : stryMutAct_9fa48("570") ? false : (stryCov_9fa48("570", "571"), (stryMutAct_9fa48("574") ? bound >= n : stryMutAct_9fa48("573") ? bound <= n : stryMutAct_9fa48("572") ? true : (stryCov_9fa48("572", "573", "574"), bound < n)) && (stryMutAct_9fa48("577") ? arr[bound] > target : stryMutAct_9fa48("576") ? arr[bound] < target : stryMutAct_9fa48("575") ? true : (stryCov_9fa48("575", "576", "577"), arr[bound] <= target)))) {
        if (stryMutAct_9fa48("578")) {
          {}
        } else {
          stryCov_9fa48("578");
          stryMutAct_9fa48("579") ? bound /= 2 : (stryCov_9fa48("579"), bound *= 2);
        }
      }

      // Perform binary search in the found range
      return this.binarySearch(arr, target, stryMutAct_9fa48("580") ? bound * 2 : (stryCov_9fa48("580"), bound / 2), stryMutAct_9fa48("581") ? Math.max(bound, n - 1) : (stryCov_9fa48("581"), Math.min(bound, stryMutAct_9fa48("582") ? n + 1 : (stryCov_9fa48("582"), n - 1))));
    }
  }
  static binarySearch(arr, target, left, right) {
    if (stryMutAct_9fa48("583")) {
      {}
    } else {
      stryCov_9fa48("583");
      while (stryMutAct_9fa48("586") ? left > right : stryMutAct_9fa48("585") ? left < right : stryMutAct_9fa48("584") ? false : (stryCov_9fa48("584", "585", "586"), left <= right)) {
        if (stryMutAct_9fa48("587")) {
          {}
        } else {
          stryCov_9fa48("587");
          const mid = stryMutAct_9fa48("588") ? left - Math.floor((right - left) / 2) : (stryCov_9fa48("588"), left + Math.floor(stryMutAct_9fa48("589") ? (right - left) * 2 : (stryCov_9fa48("589"), (stryMutAct_9fa48("590") ? right + left : (stryCov_9fa48("590"), right - left)) / 2)));

          // Check if the target is at mid
          if (stryMutAct_9fa48("593") ? arr[mid] !== target : stryMutAct_9fa48("592") ? false : stryMutAct_9fa48("591") ? true : (stryCov_9fa48("591", "592", "593"), arr[mid] === target)) {
            if (stryMutAct_9fa48("594")) {
              {}
            } else {
              stryCov_9fa48("594");
              return mid;
            }
          }

          // Adjust the search range
          if (stryMutAct_9fa48("598") ? arr[mid] >= target : stryMutAct_9fa48("597") ? arr[mid] <= target : stryMutAct_9fa48("596") ? false : stryMutAct_9fa48("595") ? true : (stryCov_9fa48("595", "596", "597", "598"), arr[mid] < target)) {
            if (stryMutAct_9fa48("599")) {
              {}
            } else {
              stryCov_9fa48("599");
              left = stryMutAct_9fa48("600") ? mid - 1 : (stryCov_9fa48("600"), mid + 1);
            }
          } else {
            if (stryMutAct_9fa48("601")) {
              {}
            } else {
              stryCov_9fa48("601");
              right = stryMutAct_9fa48("602") ? mid + 1 : (stryCov_9fa48("602"), mid - 1);
            }
          }
        }
      }
      return stryMutAct_9fa48("603") ? +1 : (stryCov_9fa48("603"), -1); // Target not found
    }
  }
}
module.exports = ExponentialSearch;